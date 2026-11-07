import { Logo } from "./Logo";
import { WaitlistForm } from "./WaitlistForm";

export function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-8 px-5 md:px-8 lg:grid-cols-12">
        <p className="text-xl font-semibold lg:col-span-3">About</p>
        <p className="text-[clamp(1.5rem,2.8vw,2.3rem)] font-semibold leading-[1.18] tracking-[-0.02em] lg:col-span-8">
          Everyone has an administrative life, and nobody was taught how to run it. LIFEOS is being built for Europe first, so the paperwork works for you instead of the other way around.
        </p>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="waitlist" className="bg-ink py-24 text-white md:py-36">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <h2 className="display max-w-4xl text-[clamp(2.6rem,6.4vw,5.6rem)]">Take control of your administrative life.</h2>
        <p className="mt-6 max-w-lg text-lg text-white/70">
          Be among the first to experience a smarter way to manage your personal life.
        </p>
        <div className="mt-10 max-w-xl">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const links = ["Product", "Security", "Privacy", "Terms", "Contact"];
  return (
    <footer className="bg-deep text-white/70">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <Logo className="text-white" />
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
          {links.map((l) => (
            <li key={l}>
              <a href={l === "Product" ? "#product" : l === "Security" ? "#security" : l === "Contact" ? "mailto:hello@lifeos.eu" : "#top"} className="hover:text-white">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm">© 2026 LIFEOS</p>
      </div>
    </footer>
  );
}
