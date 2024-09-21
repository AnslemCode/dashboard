import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex">
        <div className="w-1/5 bg-[#FAFAFA] h-screen sticky top-0 p-4">
          <Sidebar />
        </div>
        <div className="w-4/5 overflow-y-auto p-4">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
