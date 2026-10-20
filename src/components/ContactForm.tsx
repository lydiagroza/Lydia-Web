"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

type Status = "idle" | "sending" | "success" | "error" | "invalid";

const field =
  "w-full rounded-md border border-border bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-accent/60 focus:outline-none";

// Posts to contact.php (public/contact.php), which emails the message from
// the cPanel server.
export default function ContactForm({ t }: { t: Dictionary["contact"]["form"] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "");
    if (
      !String(data.get("name") ?? "").trim() ||
      !/^\S+@\S+\.\S+$/.test(email) ||
      String(data.get("message") ?? "").trim().length < 10
    ) {
      setStatus("invalid");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/contact.php", { method: "POST", body: data });
      const json = await res.json().catch(() => null);
      if (res.ok && json?.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus(res.status === 422 ? "invalid" : "error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        role="status"
        className="flex items-center justify-center gap-2 rounded-xl border border-accent/30 bg-indigo/10 px-6 py-8 text-sm text-foreground"
      >
        <CheckCircle2 size={18} className="text-accent" />
        {t.success}
      </motion.p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="grid gap-4 rounded-xl border border-border bg-background/70 p-6 text-left backdrop-blur-sm sm:grid-cols-2"
    >
      <label className="grid gap-1.5 text-xs text-muted">
        {t.name}
        <input name="name" autoComplete="name" required maxLength={100} className={field} />
      </label>
      <label className="grid gap-1.5 text-xs text-muted">
        {t.email}
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={200}
          className={field}
        />
      </label>
      <label className="grid gap-1.5 text-xs text-muted sm:col-span-2">
        {t.message}
        <textarea
          name="message"
          required
          rows={5}
          maxLength={5000}
          placeholder={t.placeholder}
          className={`${field} resize-y`}
        />
      </label>

      {/* Honeypot: hidden from people, filled in by spam bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 overflow-hidden">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col items-center gap-3 sm:col-span-2 sm:flex-row sm:justify-between">
        <AnimatePresence mode="wait">
          {(status === "error" || status === "invalid") && (
            <motion.p
              key={status}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="alert"
              className="text-xs text-coral"
            >
              {status === "error" ? t.error : t.invalid}
            </motion.p>
          )}
        </AnimatePresence>
        <button
          type="submit"
          disabled={status === "sending"}
          className="flex items-center gap-2 rounded-md bg-indigo px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_-10px_rgba(79,70,229,0.8)] transition-[background-color,box-shadow,translate,opacity] hover:-translate-y-px hover:bg-indigo-bright hover:shadow-[0_10px_30px_-8px_rgba(79,70,229,0.9)] disabled:opacity-60 sm:ml-auto"
        >
          <Send size={15} />
          {status === "sending" ? t.sending : t.send}
        </button>
      </div>
    </form>
  );
}
