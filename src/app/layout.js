import { Cairo } from "next/font/google";
import "./globals.css";
import Links from "./components/Links";
import Header from "./components/Header";

import Footer from "./components/Footer";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import BackToTop from "./components/BackToTop";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900", "1000"],
});

export const metadata = {
  title: "Link Design",
  description: "Link desgin For Firefiting Systems and Pluming",
};

export default function RootLayout({ children }) {
  return (
    <html lang={"ar"} dir={"rtl"}>
      <head>
        <link rel="icon" href="/linkdesign-icon.png" sizes="any" />
      </head>
      <body className={cairo.className} style={{ position: "relative" }}>
        <Analytics />
        <SpeedInsights />

        <SpeedInsights />
        <Links />
        <Header />

        {children}

        <BackToTop />

        <Footer />
      </body>
    </html>
  );
}
