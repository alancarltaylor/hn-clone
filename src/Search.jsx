import React, { useState } from "react";

const Search = (props) => {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <form
      onSubmit={(evt) => {
        onSubmit(searchTerm);
        evt.preventDefault();
      }}
    >
      <input
        data-testid="search-input"
        onChange={(evt) => setSearchTerm(evt.target.value)}
        value={searchTerm}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
