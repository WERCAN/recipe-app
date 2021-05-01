import React, { useState } from "react";

//setTimeOut kullanimini dene
export const SearchField = ({ setQuery }) => {
  const [search, setSearch] = useState("");

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <form onSubmit={getSearch}>
      <input
        type="text"
        placeholder="write a meal"
        value={search}
        onChange={updateSearch}
      ></input>
      <button type="submit" onClick={getSearch}>
        <i className="fas fa-search" />
      </button>
    </form>
  );
};
