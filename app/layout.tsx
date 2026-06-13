import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SchoolChatbot from "../components/SchoolChatbot";

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
  title: "Sunshine Model School",
  description: "Official website of Sunshine Model School",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps): React.JSX.Element {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />

        <SchoolChatbot />
      </body>
    </html>
  );
}