import type { Metadata } from "next";
import "./globals.css";
import iranYekan from "../contracts/localFont";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A showcase of my projects and skills. Welcome to my personal portfolio website.",
  authors: [{ name: "Tania Shafiee" }],
  icons: {
    icon: "/favicon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${iranYekan.className} antialiased !bg-[#121212] min-h-screen`}
      >
        <main className="max-w-[1580px] mx-auto">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}