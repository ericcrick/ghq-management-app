
import EmployeeTable from "@/app/components/Employees/employee.table";
import MainLayout from "@/app/components/MainLayout/main-layout";
import React from "react";

const EmployeesDetailPage = () => {
  return (
    <MainLayout>
      <EmployeeTable/>
    </MainLayout>
  );
};

export default EmployeesDetailPage;
