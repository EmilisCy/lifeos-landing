"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#product", label: "Product" },
  { href: "#features", label: "Features" },
  { href: "#security", label: "Security" },
  { href: "#about", label: "About" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300 ${
        solid || open ? "bg-deep/92 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 md:px-8">
        <a href="#top" aria-label="LIFEOS home">
          <Logo />
        </a>
        <ul className="hidden items-center gap-9 text-[15px] text-white/75 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#waitlist"
            className="hidden h-10 items-center rounded-md bg-white px-4 text-[15px] font-semibold text-ink transition-colors hover:bg-electric hover:text-white sm:inline-flex"
          >
            Join the waitlist
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md border border-white/20 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-white/10 px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/10 py-4 text-lg"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="mt-5 flex h-12 items-center justify-center rounded-md bg-white font-semibold text-ink"
          >
            Join the waitlist
          </a>
        </div>
      )}
    </header>
  );
}
