// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digitio Stack - Modern Web Solutions",
  description:
    "Showcasing stunning website products built with modern technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      {/* Set body background to a light gray, matching the Finpay UI design */}
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}