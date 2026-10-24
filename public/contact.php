<?php
// Contact form handler for cPanel hosting. Receives the form from
// ContactForm.tsx and emails it with PHP's mail().

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

const TO = 'lydiagroza@gmail.com';
const FROM_ADDRESS = 'no-reply@lydiagrozaweb.com';
const FROM = 'Lydia Groza Website <' . FROM_ADDRESS . '>';
const MAX_PER_HOUR = 5;

function respond(int $code, array $body): void {
    http_response_code($code);
    echo json_encode($body);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['ok' => false]);
}

// Spam bots fill in the hidden "company" field; pretend it worked.
if (!empty($_POST['company'])) {
    respond(200, ['ok' => true]);
}

$name = trim((string)($_POST['name'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));
$phone = trim((string)($_POST['phone'] ?? ''));
$type = trim((string)($_POST['type'] ?? ''));

if ($name === '' || mb_strlen($name) > 100
    || !filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 200
    || mb_strlen($message) < 10 || mb_strlen($message) > 5000
    || mb_strlen($phone) > 40 || mb_strlen($type) > 100) {
    respond(422, ['ok' => false, 'error' => 'invalid']);
}

// Simple per-IP rate limit, stored in the system temp dir.
$ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$log = sys_get_temp_dir() . '/lg-contact-' . md5($ip);
$now = time();
$recent = array_filter(
    is_file($log) ? array_map('intval', file($log, FILE_IGNORE_NEW_LINES)) : [],
    fn ($t) => $t > $now - 3600
);
if (count($recent) >= MAX_PER_HOUR) {
    respond(429, ['ok' => false, 'error' => 'rate_limited']);
}
$recent[] = $now;
file_put_contents($log, implode("\n", $recent), LOCK_EX);

// Names can't contain line breaks (they go in the subject header). The email
// address is safe for Reply-To: FILTER_VALIDATE_EMAIL rejects line breaks.
$name = preg_replace('/[\r\n\t]+/', ' ', $name);
$subject = '=?UTF-8?B?' . base64_encode("Website enquiry from $name") . '?=';
$body = "Name: $name\nEmail: $email\n";
if ($phone !== '') {
    $body .= "Phone: $phone\n";
}
if ($type !== '') {
    $body .= "Needs: $type\n";
}
$body .= "\n$message\n";
$headers = [
    'From' => FROM,
    'Reply-To' => $email,
    'Content-Type' => 'text/plain; charset=UTF-8',
    'X-Mailer' => 'lydiagrozaweb.com contact form',
];

// -f sets the envelope sender. Without it the server sends as the cPanel
// user at the host's own domain, so Gmail checks SPF/DKIM for that domain
// instead of lydiagrozaweb.com and the message fails DMARC.
if (!mail(TO, $subject, $body, $headers, '-f' . FROM_ADDRESS)) {
    respond(500, ['ok' => false, 'error' => 'send_failed']);
}

respond(200, ['ok' => true]);
