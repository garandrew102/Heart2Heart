import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./account.css";
import Story from "./Story";
import Info from "./Info";
import Avatar from "./Avatar";

const Account = () => {
  const { currentUser } = useContext(AppContext);
  return (
    <>
      <h1 className="mb-3">Welcome, {currentUser?.name}</h1>
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
