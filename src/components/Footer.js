import React from "react";

const Footer = () => {
const year = new Date().getFullYear();
  return (
    <footer>
      <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M37.3419 1.59629C37.2347 3.19564 38.1253 5.07321 40.3435 6.4041C38.6246 9.01567 39.2415 9.89408 41.4635 12.2841C40.3227 15.9351 41.0037 17.2547 44.8235 18.1641C46.3584 22.9137 47.634 23.6563 50.7035 21.5241C52.667 23.8112 54.069 24.3032 55.7064 23.9305C55.8999 25.259 56 26.6178 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C31.2758 0 34.4202 0.562542 37.3419 1.59629Z" fill="white"/>
          <path d="M14.359 36.4208L19.8762 20.8723C19.9075 20.7842 20.0317 20.7833 20.0642 20.8709L25.7828 36.2861C25.807 36.3514 25.7587 36.4208 25.689 36.4208H18.1836" stroke="#1B1B1B" stroke-width="2.3"/>
          <path d="M23.793 20.1025L29.3101 35.4001C29.3417 35.4876 29.4652 35.4884 29.4978 35.4013L32.3721 27.7365C32.4041 27.6512 32.5241 27.6496 32.5584 27.734L35.6806 35.4193C35.7148 35.5035 35.8347 35.502 35.8668 35.4169L41.59 20.2378C41.6147 20.1724 41.5664 20.1025 41.4965 20.1025H27.6176" stroke="#1B1B1B" stroke-width="2.3"/>
        </svg>
      </div>
      <div className="text">
        <p>Amrén & Wiklund</p>
        <p>© {year}</p>
      </div>
    
    </footer>
  )
}

export default Footer;