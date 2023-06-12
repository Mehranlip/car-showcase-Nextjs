"use client";

import React from "react";
import { SearchManuFacture } from "./";

import { useState } from "react";

function SearchBar() {
  const [manuFacturer, setManuFacturer] = useState("");
  const handelSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handelSearch}>
      <div className="searchbar__item">
        <SearchManuFacture
          manuFacturer={manuFacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
}

export default SearchBar;
