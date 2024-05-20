import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { ReactComponent as Clock } from "../assets/clock.svg";

import { ReactComponent as Portions } from "../assets/portions.svg";
import { BackButton } from "../components/buttons/BackButton";
const Recipe = ({ recipes }) => {
  const { recipeSlug } = useParams();
  const theRecipe = recipes.find((r) => r.fields.slug === recipeSlug);
  const recipe = theRecipe?.fields;

  let author = theRecipe?.metadata?.tags?.find((t) => t?.sys?.id.includes("author"))?.sys?.id.slice(6);
  author = author?.charAt(0).toUpperCase() + author?.slice(1);

  return (
    <article className="single-recipe">
      <div
        className="hero-recipe"
        style={{
          backgroundImage: `url('${recipe?.image?.fields?.file?.url}')`,
        }}>
        <BackButton />
        <h1>{recipe?.title}</h1>
      </div>
      <section className="content-section">
        <div className="recipe-content-container prepare">
          <span className="prepare-span">
            <Clock className="prepare-icon" />
            {recipe?.time} min
          </span>
          <span className="prepare-span">
            <Portions className="prepare-icon" />
            {recipe?.serves} portioner
          </span>
        </div>
        <p>{theRecipe?.fields?.summary}</p>
        <div className="recipe-content-container">
          <h2>Ingredienser:</h2>
          <ReactMarkdown className="ul-list">
            {recipe?.ingredients}
          </ReactMarkdown>
        </div>
        <div className="recipe-content-container">
          <h2>Gör så här:</h2>
          <ReactMarkdown className="ol-list">
            {recipe?.description}
          </ReactMarkdown>
        </div>
        <div className="recipe-content-container author">
          {author ? 
            <p className="recipe-author">
              Kreatör: {author}
            </p>
            : <span></span>
          }
          {recipe?.cred && 
            <p className="recipe-cred">
              Cred till: {recipe?.cred}
            </p>
          }
        </div>
      </section>
    </article>
  );
};

export default Recipe;
