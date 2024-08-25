import { Cairo } from "next/font/google";
import "./globals.css";
import Links from "./components/Links";
import Header from "./components/Header";

import BackToTop from "./components/ScrollTop";
import Footer from "./components/Footer";

// import Dial from "./components/Dial";

import { SpeedInsights } from "@vercel/speed-insights/next";
import BasicSpeedDial from "./components/SpeedDial";


const cairo = Cairo({ subsets: ["latin"], weight: "600" });

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
      <body className={cairo.className} style={{position: "relative"}}>

          <SpeedInsights />
          <Links />
          <Header />
          {children}
          <span className="hidden md:block">

          <BackToTop />

          </span>

          <span className=" fixed right-1 bottom-0 z-50 md:hidden">

            <BasicSpeedDial/>
          </span>
        
          <Footer />
      </body>
    </html>
  );
}
