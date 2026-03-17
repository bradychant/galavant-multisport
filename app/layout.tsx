import type { Metadata } from "next";
import { Syncopate } from "next/font/google";
import "./globals.css";

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
});

export const metadata: Metadata = {
  title: "Galavant Multisport",
  description: "Go Far. Enjoy the View. — Empowering athletes through community and sport.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={syncopate.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
