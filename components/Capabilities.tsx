"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, Bell, Check, FileLock2, FileText, Lock, Waypoints, Wand2 } from "lucide-react";

const items = [
  { id: "vault", icon: FileLock2, name: "Personal Vault", text: "Securely organize all your important documents." },
  { id: "contracts", icon: FileText, name: "Contract Intelligence", text: "Understand agreements, obligations, deadlines and potentially unfavorable terms." },
  { id: "risk", icon: Bell, name: "Risk Detection", text: "Get notified about important deadlines and possible problems before they become costly." },
  { id: "agent", icon: Wand2, name: "Life Admin Agent", text: "Prepare letters, fill out forms and assist with administrative tasks." },
  { id: "timeline", icon: Waypoints, name: "Life Timeline", text: "See your upcoming obligations, renewals and important events in one place." },
] as const;

function Vault() {
  const rows = [
    ["Employment contract", "Work", "12 Mar 2025"],
    ["Rental agreement", "Home", "7 Dec 2026"],
    ["Car insurance policy", "Insurance", "22 Dec 2026"],
    ["Passport scan", "Identity", "May 2027"],
    ["Tax return 2025", "Finance", "30 Jun 2026"],
  ];
  return (
    <div>
      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="font-semibold">All documents</span>
        <span className="flex items-center gap-1.5 text-xs text-muted"><Lock size={12} /> Encrypted</span>
      </div>
      <ul className="divide-y divide-hair rounded-lg border border-hair">
        {rows.map(([n, c, d]) => (
          <li key={n} className="flex items-center gap-3 px-4 py-3 text-sm">
            <FileText size={16} className="text-electric" />
            <span className="flex-1 font-medium">{n}</span>
            <span className="hidden rounded bg-mist px-2 py-0.5 text-xs text-muted sm:block">{c}</span>
            <span className="tnum w-24 text-right text-xs text-muted">{d}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Contracts() {
  return (
    <div className="grid gap-4 sm:grid-cols-5">
      <div className="rounded-lg border border-hair p-4 text-[13px] leading-relaxed sm:col-span-3">
        <p className="mb-2 font-semibold">Rental agreement · §7</p>
        <p className="text-muted">
          The tenancy ends on 7 March 2027.{" "}
          <mark className="rounded bg-amber/20 px-0.5 text-ink">
            If neither party gives written notice ninety (90) days before the end date, the tenancy extends for a further twelve (12) months.
          </mark>{" "}
          Rent may be adjusted annually by the consumer price index.
        </p>
      </div>
      <div className="space-y-2 sm:col-span-2">
        {[["Auto-renewal", "Check", true], ["Rent indexation", "Note", false], ["Deposit return", "Fine", false]].map(([t, l, hot]) => (
          <div key={t as string} className="flex items-center justify-between rounded-lg border border-hair px-3 py-2.5 text-sm">
            <span>{t}</span>
            <span className={`rounded px-2 py-0.5 text-xs font-semibold ${hot ? "bg-amber/15 text-amber" : "bg-mist text-muted"}`}>{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Risk() {
  return (
    <ul className="space-y-3">
      {[
        ["Rental agreement renews in 30 days", "Send notice by 7 Dec to avoid another 12 months.", true],
        ["Car insurance price changed", "Renewal quote is €38 higher than last year.", true],
        ["Passport expires in 6 months", "Some countries require 6 months’ validity to enter.", false],
      ].map(([t, d, hot]) => (
        <li key={t as string} className="flex gap-3 rounded-lg border border-hair p-4">
          <AlertTriangle size={17} className={`mt-0.5 shrink-0 ${hot ? "text-amber" : "text-muted"}`} />
          <div>
            <p className="text-sm font-semibold">{t}</p>
            <p className="text-[13px] text-muted">{d}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Agent() {
  return (
    <div className="rounded-lg border border-hair">
      <div className="flex items-center justify-between border-b border-hair px-4 py-2.5 text-xs text-muted">
        <span>Draft · Notice of non-renewal</span>
        <span className="rounded bg-ok/10 px-2 py-0.5 font-semibold text-ok">Ready to sign</span>
      </div>
      <div className="space-y-2 p-5 text-[13px] leading-relaxed">
        <p className="text-muted">Mira Lindqvist · Flat 14 · 7 November 2026</p>
        <p>Dear landlord,</p>
        <p>
          Under section 7 of our tenancy agreement dated 7 March 2027, I am giving written notice that I will not renew the tenancy ending on 7 March 2027…
        </p>
        <p className="text-muted">Filled from your agreement. Review, edit, then sign.</p>
      </div>
    </div>
  );
}

function Timeline() {
  const ev = [
    ["Dec", "Rental notice", true],
    ["Dec", "Car insurance renews", false],
    ["Mar", "Probation ends", false],
    ["May", "Passport expires", false],
  ];
  return (
    <ol className="relative space-y-5 pl-6 before:absolute before:left-[7px] before:top-1 before:h-[calc(100%-8px)] before:w-px before:bg-hair">
      {ev.map(([m, t, hot]) => (
        <li key={t as string} className="relative flex items-baseline gap-4">
          <span className={`absolute -left-6 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white ring-1 ${hot ? "bg-amber ring-amber" : "bg-electric ring-electric"}`} />
          <span className="w-10 text-sm font-semibold">{m}</span>
          <span className="text-[15px]">{t}</span>
        </li>
      ))}
    </ol>
  );
}

const views = { vault: Vault, contracts: Contracts, risk: Risk, agent: Agent, timeline: Timeline };

export function Capabilities() {
  const [active, setActive] = useState<(typeof items)[number]["id"]>("vault");
  const View = views[active];
  const current = items.find((i) => i.id === active)!;

  return (
    <section id="features" className="bg-mist py-24 md:py-36">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <h2 className="display max-w-3xl text-[clamp(2.4rem,5.2vw,4.4rem)]">One platform. Complete clarity.</h2>
        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div role="tablist" aria-label="LIFEOS capabilities" className="lg:col-span-5">
            {items.map(({ id, icon: I, name, text }) => {
              const on = id === active;
              return (
                <button
                  key={id}
                  role="tab"
                  id={`tab-${id}`}
                  aria-selected={on}
                  aria-controls="cap-panel"
                  onClick={() => setActive(id)}
                  className={`group block w-full border-t border-hair py-5 text-left transition-colors ${on ? "" : "opacity-60 hover:opacity-100"}`}
                >
                  <span className="flex items-center gap-3 text-xl font-semibold tracking-[-0.01em]">
                    <I size={20} className={on ? "text-electric" : ""} /> {name}
                  </span>
                  {on && <span className="mt-2 block pl-8 text-[15px] leading-relaxed text-muted">{text}</span>}
                </button>
              );
            })}
          </div>
          <div className="lg:col-span-7">
            <div
              id="cap-panel"
              role="tabpanel"
              aria-labelledby={`tab-${active}`}
              className="min-h-[360px] rounded-xl border border-hair bg-white p-5 shadow-[0_30px_80px_-40px_rgba(10,23,48,0.35)] md:p-7"
            >
              <p className="mb-5 flex items-center gap-2 text-xs text-muted">
                <Check size={13} className="text-ok" /> {current.name} · sample data
              </p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  <View />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
