import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const display = Inter_Tight({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-tight",
});

export const metadata: Metadata = {
  title: "Eshwar Desetty | Security Strategy & GRC",
  description:
    "Eshwar Desetty works on security strategy, GRC and AI risk. MS in Information Security Policy & Management at Carnegie Mellon University.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f2" },
    { media: "(prefers-color-scheme: dark)", color: "#14110e" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
