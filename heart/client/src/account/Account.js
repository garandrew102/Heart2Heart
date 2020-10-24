import React from "react";
import "./account.css";
import Story from "./Story";
import Info from "./Info";
import Avatar from "./Avatar";

const Account = () => {
  return (
    <>
      <h1 className="mb-3">Account</h1>
      <div
        id="account-container"
        className="d-flex flex-wrap justify-content-center"
      >
        <Info />
        <Avatar />
      </div>
      <Story />
    </>
  );
};

export default Account;
