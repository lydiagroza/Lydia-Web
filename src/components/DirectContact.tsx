import { Mail, MessageCircle, Phone } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

const link = "flex items-center gap-2 transition-colors hover:text-accent";

// WhatsApp / call / email links for visitors who'd rather skip the form.
export default function DirectContact({ t }: { t: Dictionary["hero"] }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="font-mono text-xs text-muted">{t.direct}</p>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
        <a
          href={`https://wa.me/40723040958?text=${encodeURIComponent(t.whatsappText)}`}
          target="_blank"
          rel="noreferrer"
          className={link}
        >
          <MessageCircle size={16} />
          {t.whatsapp}
        </a>
        <a href="tel:+40723040958" className={link}>
          <Phone size={16} />
          {t.call}
        </a>
        <a href="mailto:lydiagroza@gmail.com" className={link}>
          <Mail size={16} />
          {t.email}
        </a>
      </div>
    </div>
  );
}
