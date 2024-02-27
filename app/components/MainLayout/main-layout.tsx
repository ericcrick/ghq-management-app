import React from "react";
import DeskTopSideBar from "../DesktopSidebar/desktop-sidebar";
import Header from "../Header/header";
import MobileSidebar from "../MobileSidebar/mobile-sidebar";
import { DoubleNavbar } from "../Navbar/DoubleNavbar";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full flex">
      {/* <MobileSidebar /> */}
      {/* <DeskTopSideBar /> */}
      <DoubleNavbar/>

      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 pb-4 w-full h-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
