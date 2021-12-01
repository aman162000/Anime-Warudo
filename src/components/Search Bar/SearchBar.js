import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("anime");

  const handelOnChange = (e) => {
    setQuery(e.target.value.replace(/\s+/g, "-"));
  };
  const handelCheckBoxOnChange = (e) => {
    setType(e.target.checked ? "manga" : "anime");
  };

  const handelOnKeyUp = (e) => {
    if (e.keyCode === 13 && query !== "") {
      window.location.href = `/search/${type}/${query}`;
    } else {
      return;
    }
  };
  return (
    <div className="d-flex align-items-center">
      <input
        className="search-bar "
        type="search"
        placeholder={`Search ${type}...`}
        size="40"
        aria-label="Search"
        onChange={handelOnChange}
        onKeyUp={handelOnKeyUp}
      />

      <input
        type="checkbox"
        class="custom-toggle ms-3"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Toggle between Anime & Manga"
        onChange={handelCheckBoxOnChange}
      />
    </div>
  );
}
