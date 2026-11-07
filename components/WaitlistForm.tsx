"use client";

import { useId, useState } from "react";
import { Check } from "lucide-react";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function WaitlistForm({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!value) return setError("Enter your email address.");
    if (!EMAIL.test(value)) return setError("That doesn’t look like an email address. Check it and try again.");
    setError("");
    // No backend yet: the address stays in this browser only.
    try {
      const list = JSON.parse(localStorage.getItem("lifeos-waitlist") || "[]");
      localStorage.setItem("lifeos-waitlist", JSON.stringify([...list, value]));
    } catch {}
    setDone(true);
  }

  const dark = tone === "dark";

  if (done) {
    return (
      <div role="status" className={`flex items-start gap-3 text-lg ${dark ? "text-white" : "text-ink"}`}>
        <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ok text-white">
          <Check size={14} strokeWidth={3} />
        </span>
        <p>
          You’re on the list. We’ll write to <strong>{email.trim()}</strong> when LIFEOS opens.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate aria-describedby={error ? `${id}-err` : undefined}>
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={id}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!error}
          className={`h-14 flex-1 rounded-md border px-4 text-base outline-none transition-colors focus:border-electric ${
            dark
              ? "border-white/25 bg-white/5 text-white placeholder:text-white/45"
              : "border-hair bg-white text-ink placeholder:text-muted"
          } ${error ? "border-red-400" : ""}`}
        />
        <button
          type="submit"
          className="h-14 rounded-md bg-electric px-7 text-base font-semibold text-white transition-colors hover:bg-white hover:text-ink"
        >
          Join the waitlist
        </button>
      </div>
      <p id={`${id}-err`} role="alert" className={`mt-3 min-h-6 text-sm ${dark ? "text-red-300" : "text-red-600"}`}>
        {error}
      </p>
    </form>
  );
}
