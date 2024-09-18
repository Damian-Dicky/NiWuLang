import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LTPS Infra Pvt Ltd",
  description: "Over 15 years of experience, we specialize in providing high-quality construction solutions for residential, commercial, and industrial projects. Our team of skilled professionals is committed to delivering excellence, safety, and innovation in every project we undertake. LTPS INFRA PVT. LTD. We believe in building not only structures but also long-lasting relationships with our clients. Trust us to turn your dreams into reality and make your construction journey seamless and rewarding.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      

      <body className={inter.className}>
      
        {children}
       
      </body>
    </html>
  );
}
