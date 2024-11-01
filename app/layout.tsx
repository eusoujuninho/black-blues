import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";

import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Black November do Blues",
  description: "Black November do Blues - Pague 1, leve todos!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GoogleTagManager gtmId="GTM-WMB4BWTL" />
        {children}
      </body>
    </html>
  )
}
