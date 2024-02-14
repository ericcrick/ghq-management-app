import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/Header/header";
import DeskTopSideBar from "./components/DesktopSidebar/desktop-sidebar";
import MobileSidebar from "./components/MobileSidebar/mobile-sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Management App",
  description: "Home page of management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html className="h-full bg-gray-100" lang="en">
      <body className={`${inter.className} h-full`}>
        <div className="min-h-full">
          <MobileSidebar />
          <DeskTopSideBar />

          <div className="flex flex-1 flex-col lg:pl-64">
            <Header/>
            <main className="flex-1 pb-8">
              {/* Page header */}
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
