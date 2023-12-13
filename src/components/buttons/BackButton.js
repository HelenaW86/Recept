import { Link } from "react-router-dom";
import { ReactComponent as Back } from "../../assets/backarrow.svg";

export const BackButton = () => { 
  return(
    <Link to={-1} style={{display: "block", width: "40px"}}><Back fill="white"/></Link>
  )
};