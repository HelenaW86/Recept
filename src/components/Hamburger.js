import React from "react";

export const Hamburger = (props) => {
  return(
    <button className={props.toggle ? "open hamburger" : "hamburger"} onClick={() => props.setToggle(!props.toggle)}>
      <div className="lines"></div>
      <div className="lines"></div>
      <div className="lines"></div>
    </button>
  )
}