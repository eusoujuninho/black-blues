import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });

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
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WMB4BWTL"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <GoogleTagManager gtmId="GTM-WMB4BWTL" />
        {children}
      </body>
    </html>
  )
}
