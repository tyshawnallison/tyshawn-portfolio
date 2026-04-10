import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Tyshawn Allison — Model",
    template: "%s — Tyshawn Allison",
  },
  description:
    "Tyshawn Allison — Chicago-based model. Publication, modeling, digitals, and content creation portfolio.",
  metadataBase: new URL("https://tyshawn-allison.vercel.app"),
  openGraph: {
    title: "Tyshawn Allison — Model",
    description:
      "Chicago-based model. Publication, modeling, digitals, and content creation portfolio.",
    type: "website",
    images: ["/images/publication/publication-01.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
