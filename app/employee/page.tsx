import React, { Suspense } from "react";
import Database from "../components/Employees/detail";
import MainLayout from "../components/MainLayout/main-layout";

const EmployeesPage = () => {
  return (
    <Suspense fallback={<p>Loading page...</p>}>
      <MainLayout>
        <Database />
      </MainLayout>
    </Suspense>
  );
};

export default EmployeesPage;
