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
    if (window.scrollY > 1) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  })



  return (
    <>
      <nav className={`navbar ${background ? "background" : ""}`}>
        {/* <Link to={'/'}>
          <Logo src={img} alt="wa" onClick={() => resetRecipes()} />
        </Link> */}
        <Hamburger setToggle={setToggle} toggle={toggle} />
      </nav>

   
      <div className={`dropdown-menu ${toggle ? "open" : ""}`}>
        <Menu tags={tags} onTagsChange={onTagsChange} setToggle={setToggle} />
      </div>
      
    </>
  );
};

export default Navbar;
