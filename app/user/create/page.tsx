import MainLayout from "@/app/components/MainLayout/main-layout";
import { AddUser } from "@/app/components/Users/create-user";
import React from "react";

const CreateUserPage = () => {
  return (
    <MainLayout>
      <AddUser />
    </MainLayout>
  );
};

export default CreateUserPage;
