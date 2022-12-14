import React from "react";

const Button = ({text, type, action}) => {
  return(
    <button onClick={action} className={type}>{text}</button>
  )
}
export default Button;