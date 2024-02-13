import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohamad Taky",
  description: "Mohamad Taky Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} scrollbar-thin scrollbar-thumb-blue-500 bg-gray-950 text-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
