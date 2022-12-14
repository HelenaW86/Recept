import React, { useState } from "react";
import styled from "styled-components";
import img from "../assets/logo.svg";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 14px;
`;

const Logo = styled.img`
  width: 70px;
`;

const Hamburger = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const Lines = styled.div`
  background-color: white;
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
