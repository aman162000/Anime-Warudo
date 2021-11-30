import React from "react";
import "./Modal.css";
export default function Modal() {
  const handelOnClick = (e) => {
    const modal = document.getElementById("serch-filter");
    modal.style.display = "block";
  };

  return (
    <>
      <div className=" modal--container " id="serch-filter">
        hkjhdjkahdash
      </div>
      <button className="mx-auto" onClick={handelOnClick}>
        Click
      </button>
    </>
  );
}
