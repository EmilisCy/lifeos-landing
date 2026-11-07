"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { BellRing, CheckCircle2, FileUp, Pause, Play } from "lucide-react";

const steps = [
  { title: "Upload a rental agreement", text: "Drop in a PDF or a photo. It goes straight to your vault." },
  { title: "Key information is extracted", text: "Parties, rent, term and notice period, read for you." },
  { title: "A renewal clause is found", text: "LIFEOS flags the auto-renewal and explains it in plain language." },
  { title: "A reminder is created", text: "You’re told 14 days before the notice window closes." },
  { title: "Ask about the agreement", text: "Get answers that point to the exact section." },
];

const fields = [
  ["Landlord", "Hartmann Immobilien GmbH"],
  ["Tenant", "Mira Lindqvist"],
  ["Monthly rent", "€1,180"],
  ["Term", "7 Mar 2026 – 7 Mar 2027"],
  ["Notice period", "90 days"],
];

function Stage({ i }: { i: number }) {
  if (i === 0)
    return (
      <div className="grid h-full place-items-center">
        <div className="w-full max-w-sm rounded-lg border border-hair p-5">
          <div className="flex items-center gap-3">
            <FileUp className="text-electric" />
            <div className="flex-1">
              <p className="text-sm font-semibold">Rental agreement.pdf</p>
              <p className="text-xs text-muted">2.1 MB · 14 pages</p>
            </div>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded bg-mist">
            <motion.div className="h-full bg-electric" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.6 }} />
          </div>
          <p className="mt-2 text-xs text-muted">Encrypting and saving to your vault…</p>
        </div>
      </div>
    );
  if (i === 1)
    return (
      <dl className="mx-auto max-w-md divide-y divide-hair rounded-lg border border-hair">
        {fields.map(([k, v], n) => (
          <motion.div key={k} className="flex justify-between px-4 py-3 text-sm" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: n * 0.25 }}>
            <dt className="text-muted">{k}</dt>
            <dd className="tnum font-semibold">{v}</dd>
          </motion.div>
        ))}
      </dl>
    );
  if (i === 2)
    return (
      <div className="mx-auto max-w-lg rounded-lg border border-hair p-5 text-[14px] leading-relaxed">
        <p className="mb-2 text-xs text-muted">§7 Term and renewal · page 4</p>
        <p className="text-muted">The tenancy ends on 7 March 2027.</p>
        <motion.p initial={{ backgroundColor: "rgba(194,122,0,0)" }} animate={{ backgroundColor: "rgba(194,122,0,0.16)" }} transition={{ delay: 0.5, duration: 0.6 }} className="my-1 rounded px-1">
          If neither party gives written notice ninety (90) days before the end date, the tenancy extends for a further twelve (12) months.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mt-3 rounded-md bg-mist p-3 text-[13px]">
          <strong>In plain language:</strong> if you do nothing, you’re locked in for another year. The last day to say no is 7 December.
        </motion.p>
      </div>
    );
  if (i === 3)
    return (
      <div className="mx-auto max-w-sm space-y-3">
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-3 rounded-lg border border-hair p-4">
          <BellRing className="text-amber" />
          <div className="flex-1">
            <p className="text-sm font-semibold">Send notice of non-renewal</p>
            <p className="tnum text-xs text-muted">Due 7 Dec 2026 · reminder on 23 Nov</p>
          </div>
          <CheckCircle2 className="text-ok" />
        </motion.div>
        <p className="text-center text-xs text-muted">Added to your Life Timeline</p>
      </div>
    );
  return (
    <div className="mx-auto max-w-md space-y-2.5 text-[13.5px]">
      <p className="ml-auto w-fit rounded-lg bg-ink px-3 py-2 text-white">Can I leave before March 2027?</p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="rounded-lg bg-mist px-3 py-2 leading-snug">
        Not without a replacement tenant. Section 9.2 allows early exit only if you propose a suitable one and the landlord accepts.
        <span className="mt-1 block text-xs text-electric">Source: Rental agreement.pdf, §9.2, page 6</span>
      </motion.p>
    </div>
  );
}

export function Demo() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });

  useEffect(() => {
    if (!auto || !inView) return;
    const t = setTimeout(() => setI((n) => (n + 1) % steps.length), 5200);
    return () => clearTimeout(t);
  }, [i, auto, inView]);

  return (
    <section id="product" className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <h2 className="display max-w-3xl text-[clamp(2.4rem,5.2vw,4.4rem)]">See LIFEOS in action</h2>
        <p className="mt-5 max-w-xl text-lg text-muted">From a PDF in your downloads to a deadline you’ll never miss, in five steps.</p>
        <div ref={ref} className="mt-14 grid gap-8 lg:grid-cols-12">
          <ol className="lg:col-span-4">
            {steps.map((s, n) => (
              <li key={s.title}>
                <button
                  onClick={() => { setI(n); setAuto(false); }}
                  aria-current={n === i ? "step" : undefined}
                  className={`relative block w-full border-l-2 py-4 pl-5 text-left transition-colors ${n === i ? "border-electric" : "border-hair opacity-55 hover:opacity-100"}`}
                >
                  <span className="block text-lg font-semibold tracking-[-0.01em]">{s.title}</span>
                  {n === i && <span className="mt-1 block text-[15px] text-muted">{s.text}</span>}
                </button>
              </li>
            ))}
            <li>
              <button onClick={() => setAuto((a) => !a)} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-electric">
                {auto ? <Pause size={14} /> : <Play size={14} />} {auto ? "Pause demo" : "Play demo"}
              </button>
            </li>
          </ol>
          <div className="lg:col-span-8">
            <div className="relative min-h-[400px] overflow-hidden rounded-xl border border-hair bg-mist p-5 md:p-10">
              <div className="mb-8 flex items-center justify-between text-xs text-muted">
                <span>Rental agreement.pdf</span>
                <span className="tnum">Step {i + 1} of {steps.length} · sample data</span>
              </div>
              <div aria-live="polite" className="rounded-lg bg-white p-5 shadow-[0_20px_60px_-30px_rgba(10,23,48,0.3)] md:p-8">
                <AnimatePresence mode="wait">
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="min-h-[250px]">
                    <Stage i={i} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
