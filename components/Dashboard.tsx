import {
  AlertTriangle, CalendarClock, FileText, FolderLock, LayoutGrid, Mail, MessageSquare,
  Search, ShieldCheck, Waypoints, Sparkles, Car, Home, Plane,
} from "lucide-react";

const nav = [
  { icon: LayoutGrid, label: "Overview", active: true },
  { icon: FolderLock, label: "Vault" },
  { icon: FileText, label: "Contracts" },
  { icon: Waypoints, label: "Timeline" },
  { icon: Mail, label: "Letters" },
  { icon: MessageSquare, label: "Assistant" },
];

const obligations = [
  { icon: Home, title: "Rental agreement renewal", meta: "Notice window closes 7 Dec", days: 30, tone: "amber" },
  { icon: Car, title: "Car insurance renewal", meta: "€412 / year · auto-renews", days: 45, tone: "ink" },
  { icon: Plane, title: "Passport expires", meta: "Renewal takes ~3 weeks", days: 181, tone: "ink" },
];

const files = [
  ["Rental agreement.pdf", "Contract", "Analysed"],
  ["Employment contract.pdf", "Contract", "Analysed"],
  ["Car insurance policy.pdf", "Insurance", "Analysed"],
  ["Health insurance card.jpg", "Health", "Stored"],
];

export function Dashboard({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="overflow-hidden rounded-xl border border-hair bg-white text-ink shadow-[0_40px_120px_-30px_rgba(2,8,28,0.7)]"
      role="img"
      aria-label="LIFEOS dashboard showing upcoming obligations, a contract analysis with a flagged auto-renewal clause, the document vault, an AI assistant and a life timeline"
    >
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-hair bg-mist px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-hair" />
        <span className="h-2.5 w-2.5 rounded-full bg-hair" />
        <span className="h-2.5 w-2.5 rounded-full bg-hair" />
        <div className="mx-auto hidden h-6 w-72 items-center justify-center rounded bg-white text-[11px] text-muted sm:flex">
          app.lifeos.eu/overview
        </div>
      </div>

      <div className="flex">
        {/* sidebar */}
        <aside className="hidden w-52 shrink-0 border-r border-hair bg-mist/60 p-4 lg:block">
          <div className="mb-6 flex items-center gap-2 text-sm font-bold">
            <span className="grid h-6 w-6 place-items-center rounded bg-ink text-[10px] text-white">L</span> LIFEOS
          </div>
          <ul className="space-y-1 text-[13px]">
            {nav.map(({ icon: I, label, active }) => (
              <li
                key={label}
                className={`flex items-center gap-2.5 rounded-md px-2.5 py-2 ${
                  active ? "bg-white font-semibold shadow-[0_0_0_1px_var(--hair)]" : "text-muted"
                }`}
              >
                <I size={15} /> {label}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-md border border-hair bg-white p-3 text-[11px] leading-snug text-muted">
            <div className="mb-1 flex items-center gap-1.5 font-semibold text-ink">
              <ShieldCheck size={13} className="text-ok" /> Vault locked
            </div>
            Only you can open your documents.
          </div>
        </aside>

        {/* main */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] text-muted">Saturday, 7 November</p>
              <h3 className="text-lg font-bold tracking-tight">Good morning, Mira</h3>
            </div>
            <div className="hidden h-8 w-56 items-center gap-2 rounded-md border border-hair px-2.5 text-xs text-muted sm:flex">
              <Search size={13} /> Search documents or ask…
            </div>
          </div>

          {/* risk banner */}
          <div className="mb-4 flex items-start gap-3 rounded-lg border border-amber/30 bg-amber/[0.07] p-3">
            <AlertTriangle size={17} className="mt-0.5 shrink-0 text-amber" />
            <div className="text-[13px] leading-snug">
              <strong>Your rental agreement renews automatically in 30 days.</strong>{" "}
              <span className="text-muted">Cancel by 7 Dec to avoid another 12-month term.</span>
            </div>
            <span className="ml-auto hidden shrink-0 rounded bg-ink px-2.5 py-1 text-[11px] font-semibold text-white sm:block">
              Draft notice
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            {/* obligations */}
            <section className="rounded-lg border border-hair p-4 md:col-span-3">
              <h4 className="mb-3 flex items-center gap-2 text-[13px] font-semibold">
                <CalendarClock size={15} className="text-electric" /> Upcoming obligations
              </h4>
              <ul className="divide-y divide-hair">
                {obligations.map(({ icon: I, title, meta, days, tone }) => (
                  <li key={title} className="flex items-center gap-3 py-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-md bg-mist"><I size={15} /></span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[13px] font-semibold">{title}</p>
                      <p className="truncate text-[11px] text-muted">{meta}</p>
                    </div>
                    <span
                      className={`tnum rounded px-2 py-1 text-[11px] font-semibold ${
                        tone === "amber" ? "bg-amber/15 text-amber" : "bg-mist text-ink"
                      }`}
                    >
                      {days} days
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* contract analysis */}
            <section className="rounded-lg border border-hair p-4 md:col-span-2">
              <h4 className="mb-3 flex items-center gap-2 text-[13px] font-semibold">
                <FileText size={15} className="text-electric" /> Contract analysis
              </h4>
              <dl className="space-y-1.5 text-[12px]">
                {[["Monthly rent", "€1,180"], ["Term", "12 months"], ["Notice period", "90 days"]].map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <dt className="text-muted">{k}</dt>
                    <dd className="tnum font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 rounded border-l-2 border-amber bg-amber/[0.07] px-2.5 py-2 text-[11.5px] leading-snug">
                <strong>Auto-renews</strong> for 12 months unless cancelled in writing 90 days before the end date.
              </p>
            </section>

            {!compact && (
              <>
                {/* vault */}
                <section className="rounded-lg border border-hair p-4 md:col-span-2">
                  <h4 className="mb-3 flex items-center gap-2 text-[13px] font-semibold">
                    <FolderLock size={15} className="text-electric" /> Document vault
                  </h4>
                  <ul className="space-y-2">
                    {files.map(([n, , s]) => (
                      <li key={n} className="flex items-center justify-between gap-2 text-[12px]">
                        <span className="truncate">{n}</span>
                        <span className={`shrink-0 text-[10.5px] ${s === "Analysed" ? "text-ok" : "text-muted"}`}>{s}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* assistant */}
                <section className="rounded-lg border border-hair p-4 md:col-span-3">
                  <h4 className="mb-3 flex items-center gap-2 text-[13px] font-semibold">
                    <Sparkles size={15} className="text-electric" /> Ask LIFEOS
                  </h4>
                  <p className="ml-auto mb-2 w-fit max-w-[85%] rounded-lg bg-ink px-3 py-2 text-[12px] text-white">
                    Can I leave before the year ends?
                  </p>
                  <p className="max-w-[92%] rounded-lg bg-mist px-3 py-2 text-[12px] leading-snug">
                    Only with 3 months’ written notice. Section 9.2 lets you end early if you find a replacement tenant.
                  </p>
                </section>

                {/* timeline */}
                <section className="rounded-lg border border-hair p-4 md:col-span-5">
                  <h4 className="mb-4 flex items-center gap-2 text-[13px] font-semibold">
                    <Waypoints size={15} className="text-electric" /> Life timeline
                  </h4>
                  <div className="relative">
                    <div className="absolute inset-x-0 top-[7px] h-px bg-hair" />
                    <ol className="relative grid grid-cols-4 text-[11px]">
                      {[
                        ["7 Dec", "Rental notice deadline", true],
                        ["22 Dec", "Car insurance renews", false],
                        ["Mar 2027", "Employment probation ends", false],
                        ["May 2027", "Passport expires", false],
                      ].map(([d, t, hot]) => (
                        <li key={d as string}>
                          <span className={`mb-2 block h-3.5 w-3.5 rounded-full border-2 border-white ring-1 ${hot ? "bg-amber ring-amber" : "bg-electric ring-electric"}`} />
                          <p className="font-semibold">{d}</p>
                          <p className="pr-2 text-muted">{t}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </section>
              </>
            )}
          </div>
          <p className="mt-3 text-right text-[10px] text-muted">Sample data</p>
        </div>
      </div>
    </div>
  );
}
