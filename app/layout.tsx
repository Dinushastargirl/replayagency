import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ReplayProvider } from "@/context/ReplayContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Replay.agency — Digital Growth Studio",
  description:
    "Replay is an independent digital growth studio helping businesses rethink strategy, build better digital experiences and continuously improve how they grow.",
  keywords: [
    "digital growth studio",
    "digital transformation",
    "brand strategy",
    "digital infrastructure",
    "Replay Agency",
  ],
  authors: [{ name: "Replay Agency" }],
  openGraph: {
    title: "Replay.agency — Digital Growth Studio",
    description:
      "Replay is an independent digital growth studio helping businesses rethink strategy, build better digital experiences and continuously improve how they grow.",
    url: "https://replay.agency",
    siteName: "Replay Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Replay.agency — Digital Growth Studio",
    description:
      "Replay is an independent digital growth studio helping businesses rethink strategy, build better digital experiences and continuously improve how they grow.",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F6F2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-canvas text-primary font-body antialiased selection:bg-primary selection:text-canvas">
        <ReplayProvider>{children}</ReplayProvider>
      </body>
    </html>
  );
}
