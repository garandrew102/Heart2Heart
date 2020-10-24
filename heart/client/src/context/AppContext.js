import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [showExample, setShowExample] = useState(true);

  return (
    <AppContext.Provider
      value={{
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
