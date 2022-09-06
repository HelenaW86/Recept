import React from "react";
import { useParams } from "react-router-dom";
const Recipe = ({recipes}) => {
    const { recipeSlug } = useParams();
    const theRecipe = recipes.find((r => r.fields.slug === recipeSlug));
    const recipe = theRecipe?.fields;
    console.log('THE RECIPE: ', recipe);
    console.log(recipe?.image?.fields?.file)

    return (
      <article>
        <h2>{recipe?.title}</h2>
        <img src={recipe?.image?.fields?.file?.url} alt={recipe?.title} />
        <div>
          <span>Tid: {recipe?.time} </span>
          <span>Personer: {recipe?.serves} </span>
        </div>
        <section>
          <p>
            <strong>Ingredienser: </strong>
            {recipe?.ingredients}
          </p>
          <p>
            <strong>Gör så här: </strong>
            {recipe?.description}
          </p>
        </section>
      </article>
    );
}
 
export default Recipe;