import React, { useState } from "react";
import styled from "styled-components";
import img from "../assets/wa.svg";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background-color: grey;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 100px;
`;

const Hamburger = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const Lines = styled.div`
  background-color: black;
  height: 5px;
  width: 50px;
  margin: 8px;
  border-radius: 5px;
`;

const Dropdown = styled.div`
  background-color: pink;
`;

const Navbar = ({ tags, onTagsChange, setToggle, toggle, resetRecipes }) => {
  return (
    <>
      <Nav>
        <Link to={'/'}>
          <Logo src={img} alt="wa" onClick={() => resetRecipes()} />
        </Link>
        <Hamburger onClick={() => setToggle(!toggle)}>
          <Lines></Lines>
          <Lines></Lines>
          <Lines></Lines>
        </Hamburger>
      </Nav>

      {toggle && (
        <Dropdown>
          <Menu tags={tags} onTagsChange={onTagsChange} setToggle={setToggle} />
        </Dropdown>
      )}
    </>
  );
};

export default Navbar;
