"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";

const qa = [
  {
    q: "What important deadlines do I have coming up?",
    a: ["You have three upcoming obligations:", "• Rental agreement renewal in 30 days.", "• Car insurance renewal in 45 days.", "• Passport expiration in 6 months."],
  },
  {
    q: "Can I cancel my rental agreement early?",
    a: ["Only with a replacement tenant.", "Section 9.2 allows early exit if you propose a suitable one and the landlord accepts."],
  },
  {
    q: "What happens if I miss the 7 December deadline?",
    a: ["The tenancy renews for another 12 months (§7).", "I can draft the notice of non-renewal now so you can sign it today."],
  },
];

export function Assistant() {
  const [turns, setTurns] = useState([0]);
  const [thinking, setThinking] = useState(false);

  function ask(n: number) {
    if (thinking || turns.includes(n)) return;
    setThinking(true);
    setTurns((t) => [...t, n]);
    setTimeout(() => setThinking(false), 900);
  }
  const remaining = qa.map((_, n) => n).filter((n) => !turns.includes(n));

  return (
    <section className="bg-mist py-24 md:py-36">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="display text-[clamp(2.4rem,5.2vw,4.4rem)]">An assistant that understands your paperwork.</h2>
          <p className="mt-6 max-w-md text-lg text-muted">
            Ask in plain language. Answers come from your own documents, with the source shown, so you can check them.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-xl border border-hair bg-white shadow-[0_30px_80px_-40px_rgba(10,23,48,0.35)]">
            <div className="flex items-center justify-between border-b border-hair px-5 py-3 text-sm">
              <span className="font-semibold">Ask LIFEOS</span>
              <span className="text-xs text-muted">Sample data</span>
            </div>
            <div className="min-h-[380px] space-y-4 p-5 md:p-7" aria-live="polite">
              {turns.map((n, idx) => {
                const last = idx === turns.length - 1;
                return (
                  <div key={n} className="space-y-3">
                    <p className="ml-auto w-fit max-w-[88%] rounded-xl rounded-br-sm bg-ink px-4 py-3 text-[15px] text-white">{qa[n].q}</p>
                    {last && thinking ? (
                      <p className="w-fit rounded-xl bg-mist px-4 py-3 text-[15px] text-muted">Reading your documents…</p>
                    ) : (
                      <div className="max-w-[92%] rounded-xl rounded-bl-sm bg-mist px-4 py-3 text-[15px] leading-relaxed">
                        {qa[n].a.map((l) => (
                          <p key={l} className="tnum">{l}</p>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="border-t border-hair p-4">
              <div className="flex flex-wrap gap-2">
                {remaining.length ? (
                  remaining.map((n) => (
                    <button
                      key={n}
                      onClick={() => ask(n)}
                      className="inline-flex items-center gap-2 rounded-full border border-hair px-4 py-2 text-sm transition-colors hover:border-electric hover:text-electric"
                    >
                      <ArrowUp size={13} /> {qa[n].q}
                    </button>
                  ))
                ) : (
                  <p className="px-1 py-2 text-sm text-muted">That’s the sample conversation. The real assistant takes any question.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
