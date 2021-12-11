import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setQuery, error } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchMovie() {
    setQuery(searchValue.current.value);
  }

  return (
    
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <h2>Procurar filmes</h2>
          <input
            type="text"
            id="name"
            className="form-input"
            ref={searchValue}
            onChange={searchMovie}
          />
        {error.show && <div className="error">{error.msg}</div> }
      </form>
    
  );
};

export default SearchForm;
