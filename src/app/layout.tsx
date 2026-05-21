import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pynthamil Pavendan | Designer & Developer",
    template: "%s | Pynthamil Pavendan",
  },
  description: "Designer and developer crafting digital experiences.",
};

<link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet" />


import Nav from "@/components/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.className, "font-sans", geist.variable)}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
