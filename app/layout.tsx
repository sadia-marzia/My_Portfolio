import { ReactNode } from "react";
import Navbar from "./Navbar";
import "./globals.css";
import Footer from "./Footer";
export const metadata = {
  title: "Sadiatul Marzia | Portfolio",
  description: "My personal portfolio in Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Navbar /> {/* Navbar appears globally on all pages */}
        <main>{children}</main> {/* Page-specific content */}
        <Footer /> {/* The Footer is included at the bottom of every page */}
      </body>
    </html>
  );
}