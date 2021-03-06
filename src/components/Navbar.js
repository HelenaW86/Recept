import React, { useState } from "react";
import styled from "styled-components";
import img from "../assets/wa.svg";
import Menu from "./Menu";

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

const Navbar = ({ tags, onTagsChange, setToggle, toggle }) => {
  return (
    <>
      <Nav>
        <a href="#">
          <Logo src={img} alt="wa" />
        </a>
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
