"use client";

import { motion } from "framer-motion";
import { Dashboard } from "./Dashboard";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-deep text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 80%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-5 pb-0 pt-32 md:px-8 md:pt-40">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <h1 className="display text-[clamp(2.9rem,7.6vw,6.6rem)] lg:col-span-8">
            Your entire life.
            <br />
            Under control.
          </h1>
          <div className="lg:col-span-4 lg:pb-3">
            <p className="max-w-md text-lg leading-relaxed text-white/72">
              Your documents, contracts, deadlines and important decisions. One intelligent platform that keeps
              everything organized and helps you stay one step ahead.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#waitlist"
                className="inline-flex h-12 items-center rounded-md bg-electric px-6 font-semibold transition-colors hover:bg-white hover:text-ink"
              >
                Join the waitlist
              </a>
              <a
                href="#product"
                className="inline-flex h-12 items-center rounded-md border border-white/25 px-6 font-semibold transition-colors hover:border-white"
              >
                Explore LIFEOS
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1], delay: 0.15 }}
          className="relative mt-14 md:mt-20"
        >
          <div className="max-h-[420px] overflow-hidden rounded-t-xl md:max-h-[640px]">
            <Dashboard />
          </div>
          <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-deep/70 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
