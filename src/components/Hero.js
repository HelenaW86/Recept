import React from "react";
import Header from "./Header";
import Theme from "./Theme";

const Hero = ({title, onTagsChange, tags, resetRecipes}) => {
  return(
  <section className="hero">
    <Header title={title} resetRecipes={resetRecipes} />
    <Theme onTagsChange={onTagsChange} tags={tags}/>
  </section>
  )
}
export default Hero;