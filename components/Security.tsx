"use client";

import { useState } from "react";
import { Eye, EyeOff, KeyRound, Lock, ScrollText, ShieldCheck, UserCheck } from "lucide-react";

const points = [
  { icon: Lock, t: "Encryption", d: "Documents are encrypted in transit and at rest." },
  { icon: KeyRound, t: "Controlled access", d: "Nothing is visible to anyone unless you grant it." },
  { icon: ShieldCheck, t: "Privacy-first architecture", d: "We collect what the product needs and nothing it doesn’t." },
  { icon: ScrollText, t: "Transparent data handling", d: "Plain-language explanation of what is stored, where and why." },
  { icon: UserCheck, t: "You control document access", d: "Share a document for a limited time, then revoke it." },
];

export function Security() {
  const [shared, setShared] = useState(true);
  return (
    <section id="security" className="bg-deep py-24 text-white md:py-36">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 className="display text-[clamp(2.4rem,5.2vw,4.4rem)]">Your personal information deserves more.</h2>
          <ul className="mt-12 divide-y divide-white/12 border-y border-white/12">
            {points.map(({ icon: I, t, d }) => (
              <li key={t} className="flex gap-4 py-5">
                <I size={20} className="mt-1 shrink-0 text-electric" />
                <div>
                  <p className="text-lg font-semibold">{t}</p>
                  <p className="text-[15px] text-white/65">{d}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-md text-sm text-white/55">
            LIFEOS is in development. We hold no security certifications or audits yet, and we’ll publish them here when we do.
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="rounded-xl bg-white p-6 text-ink md:p-8">
            <p className="text-xs text-muted">Access to</p>
            <p className="text-xl font-bold tracking-tight">Rental agreement.pdf</p>
            <ul className="mt-6 divide-y divide-hair rounded-lg border border-hair text-sm">
              <li className="flex items-center justify-between px-4 py-3.5">
                <span>You</span>
                <span className="font-semibold">Full access</span>
              </li>
              <li className="flex items-center justify-between gap-3 px-4 py-3.5">
                <span>
                  Anna Koch
                  <span className="block text-xs text-muted">{shared ? "View only · expires 14 Nov" : "No access"}</span>
                </span>
                <button
                  onClick={() => setShared((s) => !s)}
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-hair px-3 font-semibold transition-colors hover:border-electric hover:text-electric"
                >
                  {shared ? <><EyeOff size={14} /> Revoke</> : <><Eye size={14} /> Share again</>}
                </button>
              </li>
            </ul>
            <p role="status" className="mt-4 text-xs text-muted">
              {shared ? "Shared for 7 days. You can revoke at any time." : "Access revoked. Anna can no longer open this document."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
