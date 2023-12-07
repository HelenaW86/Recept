import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img from "../assets/logo.svg";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { Hamburger } from "./Hamburger";


const Logo = styled.img`
  width: 70px;
`;

const Navbar = ({ tags, onTagsChange, setToggle, toggle }) => {
  const [background, setBackground] = useState(false);

  window.addEventListener("scroll", () => {
    if(toggle){
      if (window.scrollY > 1) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    }
  })



  return (
    <>
      <nav className={`navbar ${background &&  !toggle ? "background" : ""}`}>
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
