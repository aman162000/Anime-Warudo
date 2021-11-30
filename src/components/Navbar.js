import React, { useState } from "react";
import SearchBar from "./Search Bar/SearchBar";
const MenuItem = [
  {
    title: "Home",
    url: "/",
    cname: "nav--links",
  },
  {
    title: "Stream",
    url: "/",
    cname: "nav--links",
  },
  {
    title: "Anime Song",
    url: "/",
    cname: "nav--links",
  },
  {
    title: "About",
    url: "/",
    cname: "nav--links",
  },
];

export default function Navbar(props) {
  const [clicked, setClicked] = useState(false);
  const handelOnClick = () => {
    setClicked(!clicked);
  };

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
