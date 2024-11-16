import type { Metadata } from "next";
import {Kanit, Montserrat} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  variable: "--font-Montserrat",
  subsets: ["latin"],
});

const kanit = Kanit({
  weight: ["400", "500", "600", "700"],
  variable: "--font-Kanit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CivicTrack",
  description: "Accountability per excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${kanit.variable} antialiased`} >
        {children}
      </body>
    </html>
  );
}
