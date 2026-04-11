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
  title: "VnIT ChatBOT - NCKH SVC2025-147",
  description: "VnIT ChatBOT - Demo NCKH SVC2025-147. Ứng dụng chatbot thông minh cho quản lý tài liệu.",
  keywords: "NCKH, ChatBot, VnIT, SVC2025-147",
  openGraph: {
    title: "VnIT ChatBOT - NCKH SVC2025-147",
    description: "VnIT ChatBOT - Demo NCKH SVC2025-147. Ứng dụng chatbot thông minh cho quản lý tài liệu.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
