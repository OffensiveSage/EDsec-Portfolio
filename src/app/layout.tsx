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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#050505" />
      </head>
      <body
        className={`${spaceMono.variable} antialiased bg-black text-white overflow-hidden touch-pan-y`}
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
