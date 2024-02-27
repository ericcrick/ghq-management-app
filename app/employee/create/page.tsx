import { AddEmployee } from "@/app/components/Employees/create";
import MainLayout from "@/app/components/MainLayout/main-layout";
import React from "react";

const CreateEmployee = () => {
  return (
    <MainLayout>
      <AddEmployee />
    </MainLayout>
  );
};

export default CreateEmployee;
