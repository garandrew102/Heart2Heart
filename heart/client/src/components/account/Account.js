import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./account.css";
import Info from "./Info";
import Header from "./Header";

const Account = () => {
  return (
    <>
      <Header />
      <div
        className="d-flex"
        id="account-container"
        className="d-flex flex-wrap justify-content-center"
      >
        <Info />
      </div>
    </>
  );
};

export default Account;
