import React from "react";
import Header from "./Header";
import Theme from "./Theme";
import { useParams } from "react-router-dom";

const Hero = ({ onTagsChange, tags, resetRecipes }) => {
  const { slug } = useParams();
  const slugName = slug?.charAt(0)?.toUpperCase() + slug?.slice(1)

  return (
    <section className={`hero${slug ? " hero-slug" : ""}`}>
      {slug && slug === "helena" || slug === "elin" || slug === "sara" || slug === "anna" ? (
        <div className="hero-content">
          <h1 className="hero-author-title">{slugName}</h1>
          <p>
            Här har {slugName} sparat sina bästa recept som hon gärna lagar om och
            om igen.
          </p>
        </div>
      ) : (
        <>
          <Header resetRecipes={resetRecipes} />
          <Theme onTagsChange={onTagsChange} tags={tags} />
        </>
      )}
    </section>
  );
};
export default Hero;
