import React from "react";
import Header from "./Header";
import Theme from "./Theme";

const Hero = ({onTagsChange, tags, resetRecipes}) => {
  return(
  <section className="hero">
    <Header resetRecipes={resetRecipes} />
    <Theme onTagsChange={onTagsChange} tags={tags}/>
  </section>
  )
}
export default Hero;