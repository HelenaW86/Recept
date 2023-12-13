import React from "react";

export const Hamburger = ({toggle, setToggle}) => {
  return(
    <button className={toggle ? "open hamburger" : "hamburger"} onClick={() => setToggle(!toggle)}>
      <div className="lines"></div>
      <div className="lines"></div>
      <div className="lines"></div>
    </button>
  )
}