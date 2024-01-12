import React, { useState } from "react";
import Menu from "./Menu";
import { Hamburger } from "./Hamburger";
import {ReactComponent as GodMat} from "../assets/goldLogo.svg"
import { Link } from "react-router-dom";

const Navbar = ({ tags, onTagsChange, setToggle, toggle, resetRecipes }) => {
  const [background, setBackground] = useState(false);

  window.addEventListener("scroll", () => {
    if(!toggle){
      if (window.scrollY > 40) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    }
  })

  return (
    <>
      <nav className={`navbar ${background &&  !toggle ? "background" : ""}`}>
        {background && (
          <Link to={"/"}>
            <GodMat className="navbar-logo" onClick={() => resetRecipes()} />
          </Link>
        )}
        <Hamburger setToggle={setToggle} toggle={toggle} />
      </nav>

      <div className={`dropdown-menu-modal ${toggle ? "open" : ""}`} onClick={() => setToggle(false)}></div>
      <div className={`dropdown-menu ${toggle ? "open" : ""}`} onClick={(e) => e.preventDefault()}>
        <Menu tags={tags} onTagsChange={onTagsChange} setToggle={setToggle} />
    
      </div>
      
    </>
  );
};

export default Navbar;
