import React, { useState } from "react";
import styled from "styled-components";
import img from "../assets/logo.svg";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { Hamburger } from "./Hamburger";


const Logo = styled.img`
  width: 70px;
`;

const Navbar = ({ tags, onTagsChange, setToggle, toggle, resetRecipes }) => {
  return (
    <>
      <nav className="navbar">
        <Link to={'/'}>
          <Logo src={img} alt="wa" onClick={() => resetRecipes()} />
        </Link>
        <Hamburger setToggle={setToggle} toggle={toggle} />
      </nav>

   
      <div className={`dropdown-menu ${toggle ? "open" : ""}`}>
        <Menu tags={tags} onTagsChange={onTagsChange} setToggle={setToggle} />
      </div>
      
    </>
  );
};

export default Navbar;
