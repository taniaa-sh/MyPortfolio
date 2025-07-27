import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import iranYekan from "@/contracts/localFont";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "portfolio",
  description: "A showcase of my projects and skills. Welcome to my personal portfolio website.",
  author: "tania shafiee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${iranYekan.className} !bg-[#121212] min-h-screen`}
      >
        <main className="max-w-[1580px] mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
