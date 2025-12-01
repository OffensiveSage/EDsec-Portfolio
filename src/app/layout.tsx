import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Eshwar Desetty | Cyber Security Portfolio",
  description: "Portfolio of Eshwar Desetty - Cyber Security Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} antialiased bg-black text-white overflow-hidden`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
