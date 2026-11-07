import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Capabilities } from "@/components/Capabilities";
import { Demo } from "@/components/Demo";
import { Assistant } from "@/components/Assistant";
import { Security } from "@/components/Security";
import { About, FinalCta, Footer } from "@/components/Closing";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Capabilities />
        <Demo />
        <Assistant />
        <Security />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
