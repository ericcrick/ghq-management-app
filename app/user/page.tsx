import React from "react";
import MainLayout from "../components/MainLayout/main-layout";
import UserTable from "../components/Users/table";

const UserPage = () => {
  return (
    <MainLayout>
      <UserTable />
    </MainLayout>
  );
};

export default UserPage;
