import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Kingdom Leadership Academy",
    template: "%s | Kingdom Leadership Academy",
  },
  description:
    "Leadership education, coaching and training that groom young men and women to be global leaders using biblical Kingdom principles.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-kla-charcoal">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
