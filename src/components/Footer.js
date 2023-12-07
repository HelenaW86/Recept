import React from "react";
import {ReactComponent as GodMat} from "../assets/footerLogo.svg"

const Footer = () => {
const year = new Date().getFullYear();
  return (
    <footer>
      <div className="icon">
        <GodMat height="60px"/>
      </div>
      <div className="text">
        <p>Amrén & Wiklund</p>
        <p>© {year}</p>
      </div>
    
    </footer>
  )
}

export default Footer;