import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import SearchForm from "./SearchForm";
import Example from "./Example";
import Results from "./Results";

const Search = () => {
  const { showExample, searchResults } = useContext(AppContext);

  return (
    <>
      <h1>Search</h1>
      <SearchForm />
      {showExample ? <Example /> : <Results />}
    </>
  );
};

export default Search;
