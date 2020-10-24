
import React from "react";
import "./account.css";
import Info from "./Info";
import Header from "./Header";

const Account = () => {
  return (
    <>
      <Header />
      <div
        id="account-container"
        className="d-flex flex-wrap justify-content-center"
      >
        <Info />

      </div>

    </>
  );
};

export default Account;
