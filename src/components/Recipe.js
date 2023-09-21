import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as Clock } from "../assets/clock.svg";
// import { ReactComponent as Portions } from "../assets/portions.svg";
const Recipe = ({ recipes }) => {
  const { recipeSlug } = useParams();
  const theRecipe = recipes.find((r) => r.fields.slug === recipeSlug);
  const recipe = theRecipe?.fields;

  return (
    <article className="single-recipe">
      <Link to={"/"}>TILLBAKA</Link>
      <h1>{recipe?.title}</h1>
      <img
        className="single-recipe-img"
        src={recipe?.image?.fields?.file?.url}
        alt={recipe?.title}
      />
      <section className="content-section">
        <div className="recipe-content-container">
          <span>
          <Clock/>
            {recipe?.time} min
          </span>
          {/* <Portions/> */}
          <span>  {recipe?.serves} </span>
        </div>
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
      </section>
    </article>
  );
};

export default Recipe;
