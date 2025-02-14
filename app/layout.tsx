import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const jeju = localFont({
  src: "./jeju.ttf",
  variable: "--font-jeju",
});
export const metadata: Metadata = {
  title: "Ticz",
  description: "Created by Adelosoye",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jeju.className} antialiased`}>{children}</body>
    </html>
  );
}
