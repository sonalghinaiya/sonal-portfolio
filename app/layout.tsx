import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sonal Ghinaiya | MERN Stack Developer Portfolio",
  description:
    "MERN Stack Developer with 11+ months experience building scalable web applications. Specialized in React.js, Node.js, Express.js, and MongoDB.",
  keywords: [
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Full Stack Developer",
    "Sonal Ghinaiya",
    "Web Developer",
    "JavaScript Developer",
  ],
  authors: [{ name: "Sonal Ghinaiya" }],
  openGraph: {
    title: "Sonal Ghinaiya | MERN Stack Developer",
    description:
      "Passionate MERN Stack Developer crafting scalable web applications with modern JavaScript frameworks and clean code",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico"
  }
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
        <SpeedInsights />
      </body>
    </html>
  );
}
