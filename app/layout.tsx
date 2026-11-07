import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LIFEOS — Your personal life operating system",
  description:
    "LIFEOS keeps your documents, contracts and deadlines in one place, reads the fine print for you, and warns you before problems get expensive. Join the waitlist.",
  openGraph: {
    title: "LIFEOS — Your entire life. Under control.",
    description:
      "One intelligent platform for your documents, contracts, deadlines and important decisions.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1730",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${schibsted.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
