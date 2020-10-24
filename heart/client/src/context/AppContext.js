import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [showExample, setShowExample] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const user = sessionStorage.getItem("user");

  console.log(currentUser);

  useEffect(() => {
    if (user && !currentUser) {
      axios
        .get("/api/user/me", { withCredentials: true })
        .then(({ data }) => {
          setCurrentUser(data);
        })
        .catch((error) => console.log(error));
    }
  }, [currentUser, user, setCurrentUser]);

  return (
    <AppContext.Provider
      value={{
        setCurrentUser,
        currentUser,
        searchResults,
        setSearchResults,
        showExample,
        setShowExample,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
