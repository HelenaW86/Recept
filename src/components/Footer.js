import React from "react";
import {ReactComponent as GodMat} from "../assets/goldLogo.svg"

const Footer = () => {
const year = new Date().getFullYear();
  return (
    <footer>
      <GodMat className="icon"/>
      <div className="text">
        <p>Amrén & Wiklund</p>
        <p>© {year}</p>
      </div>
    
    </footer>
  )
}

export default Footer;