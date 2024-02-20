import React from "react";
import DeskTopSideBar from "../DesktopSidebar/desktop-sidebar";
import Header from "../Header/header";
import MobileSidebar from "../MobileSidebar/mobile-sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-full">
      <MobileSidebar />
      <DeskTopSideBar />

      <div className="flex flex-1 flex-col lg:pl-64">
        <Header />
        <main className="flex-1 pb-8">
          {/* Page header */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
