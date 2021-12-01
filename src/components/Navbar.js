import React, { useState } from "react";
import SearchBar from "./Search Bar/SearchBar";


export default function Navbar(props) {
 
  

  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand d-none d-sm-block" href="/">
          <img
            src={props.img}
            alt=""
            srcset=""
            height="60"
            className="d-inline-block align-text-top"
          />
        </a>

        <SearchBar />
      </div>
    </nav>
  );
}
