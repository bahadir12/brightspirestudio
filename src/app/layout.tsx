import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { TerminalFooter } from "@/components/TerminalFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Brightspire Studio | Game & Backend Engineering",
  description: "A dual-focus studio specializing in high-performance game development and robust backend systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} bg-background text-foreground antialiased selection:bg-primary/30`}>
        <Navbar />
        {children}
        <TerminalFooter />
      </body>
    </html>
  );
}
