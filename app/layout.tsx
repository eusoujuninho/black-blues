import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
const inter = Inter({ subsets: ["latin"] });
import { FacebookPixelEvents } from '../components/pixel-events'

export const metadata: Metadata = {
  title: "Maratona Black",
  description: "Maratona Black - Seu solo perfeito!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}

          <FacebookPixelEvents />
        </ThemeProvider>
      </body>
    </html>
  );
}
