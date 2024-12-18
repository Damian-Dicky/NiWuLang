import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NiWuLang",
  description:
    "We're SiChuan zonglianshengtuo mineral limited company China, professional in multi-function protective products Niwulang manufacturing, and purely private enterprise, without background of military and state-owned enterprise, Keep innovating in new materials and technologies for many years ,Now we have ability of producing more than 800,000 pieces per year. Far infrared thermal image and radar stealth products benefits for the right now and the future warfares",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
