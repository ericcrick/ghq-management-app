import React, { Suspense } from "react";
import Header from "../Header/header";
import { DoubleNavbar } from "../Navbar/DoubleNavbar";
import LoadingSpinner from "../Loader/loader";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="h-screen w-full flex bg-gray-200">
        <DoubleNavbar />

        <div className="flex flex-1 flex-col">
          <Header />
          <main className="flex-1 w-full h-full">{children}</main>
        </div>
      </div>
    </Suspense>
  );
};

export default MainLayout;
