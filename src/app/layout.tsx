import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "sans-serif",
  ],
});

export const metadata: Metadata = {
  title: "Son Mai's Portfolio",
  description: "Son Mai's Portfolio",
  openGraph: {
    url: "https://portfolio-sonmai.vercel.app/",
    title: "Son Mai's Portfolio",
    description: "Son Mai's Portfolio",
    images: [
      {
        url: "https://portfolio-sonmai.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Son Mai's Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
