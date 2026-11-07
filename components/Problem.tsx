const rows = [
  ["Important documents are scattered across emails and folders.", "Scan_0042.pdf — Downloads / new folder (2)"],
  ["Contract renewal dates are forgotten until it’s too late.", "Renews automatically. Cancel 90 days before. Nobody told you."],
  ["Legal and financial obligations are unclear.", "“…shall remain jointly liable pursuant to clause 14(b)…”"],
  ["Hours disappear into filling out forms.", "Name. Address. Date of birth. Name. Address."],
  ["Payments and deadlines show up unannounced.", "€412 charged to your account on a Tuesday."],
];

export function Problem() {
  return (
    <section id="problem" className="bg-white py-24 md:py-36">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-5 md:px-8 lg:grid-cols-12">
        <h2 className="display text-[clamp(2.4rem,5.2vw,4.4rem)] lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          Life shouldn’t be this complicated.
        </h2>
        <ul className="lg:col-span-7">
          {rows.map(([claim, evidence]) => (
            <li key={claim} className="border-t border-hair py-7 first:border-t-0 first:pt-0 md:py-9">
              <p className="text-[clamp(1.35rem,2.4vw,2rem)] font-semibold leading-[1.15] tracking-[-0.02em]">{claim}</p>
              <p className="mt-3 max-w-xl text-[15px] italic text-muted">{evidence}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
