import type { Metadata } from "next";
import { Exo_2, Oxanium } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-exo-title",
  display: "swap",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fragment | Tactical Hero Card Game",
  description:
    "A tactical hero card game where combat unfolds in six-second windows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${exo2.variable} ${oxanium.variable} dark`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
