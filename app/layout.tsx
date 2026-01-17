import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muggbutiken.com"),
  title: "MuggButiken - Joy in Every Cup",
  description:
    "Start your morning right with a mug that brings a smile to your face. Handcrafted mugs designed to bring joy to your daily routine.",
  icons: {
    icon: "/muggfav.png",
    apple: "/muggfav.png",
  },
  openGraph: {
    title: "MuggButiken - Joy in Every Cup",
    description:
      "Start your morning right with a mug that brings a smile to your face. Handcrafted mugs designed to bring joy to your daily routine.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MuggButiken - Joy in Every Cup",
    description:
      "Start your morning right with a mug that brings a smile to your face. Handcrafted mugs designed to bring joy to your daily routine.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
