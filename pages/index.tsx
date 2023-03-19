import PasswordForm from "components/PasswordForm";
import { NextPage } from "next";
import React from "react";

const HomePage: NextPage = () => {
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-stretch gap-4">
          <h1 className="text-2xl my-8 text-center">Yup Password Validation</h1>

          <PasswordForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
