import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const { currentUser } = useContext(AppContext);
  return (
    <>
      <h1 className="mb-3">Welcome, {currentUser?.name}</h1>
      <div>
        <Button className="mt-2" onClick={() => history.push("/avatar")}>
          Upload Avatar
        </Button>
        <Button className="ml-2 mt-2" onClick={() => history.push("/account")}>
          Update Info
        </Button>
        <Button className="ml-2 mt-2" onClick={() => history.push("/story")}>
          Your Story
        </Button>
        <Button
          className="ml-2 mt-2"
          onClick={() => history.push("/connections")}
        >
          Connections
        </Button>
      </div>
    </>
  );
};

export default Header;
