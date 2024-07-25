import { Cairo } from "next/font/google";
import "./globals.css";
import Links from "./components/Links";
import Header from "./components/Header";

import BackToTop from "./components/ScrollTop";
import Footer from "./components/Footer";


import { SpeedInsights } from "@vercel/speed-insights/next";

const cairo = Cairo({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Link Design",
  description: "Link desgin For Firefiting Systems and Pluming",
};

export default async function RootLayout({  children }) {


  return (
    <html lang={'ar'} dir={'rtl'}>
      <head>
      <link rel="icon" href="/linkdesign-icon.png" sizes="any" />
      </head>
      <body className={cairo.className}>

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
