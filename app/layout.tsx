import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Rockarus' Myspace",
  description: "Retro blog vibes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col text-yellow-500">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
