import React from "react";
import Header from "./Header";
import Theme from "./Theme";
import { useParams } from "react-router-dom";

const Hero = ({ onTagsChange, tags, resetRecipes }) => {
  const { creator } = useParams();
  const creatorName = creator?.charAt(0)?.toUpperCase() + creator?.slice(1)

  return (
    <section className={`hero${creator ? " hero-creator" : ""}`}>
      {creator && creator === "helena" || creator === "elin" || creator === "sara" || creator === "anna" ? (
        <div className="hero-content">
          <h1 className="hero-creator-title">{creatorName}</h1>
          <p>
            Här har {creatorName} sparat sina bästa recept som hon gärna lagar om och
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
