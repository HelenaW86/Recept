import React from "react";
import { useParams } from "react-router-dom";
const Recipe = ({recipes}) => {
    const { recipeId } = useParams();
    const theRecepie = recipes.find((r => r.sys.id === recipeId));

    return ( 
        <>
        <h1>ReCIPEEE</h1>
  
        <p>{theRecepie.sys.id}</p>

        {/* { recipes.map((recipe) => {
            return (
              <article key={recipe.sys.id}>
                <h2>{ recipe.fields.title }</h2>
                <img src={recipe.fields.image.fields.file.url} alt={recipe.fields.title} />
                <p><strong>Gör så här: </strong>{ recipe.fields.description }</p>
                <ul>
                  { recipe.fields.ingredients.map((ingredient, index) => {
                    return (
                      <li key={index}>{ingredient}</li>
                    )
                  }) }
                </ul>
              </article>
            )
          })} */}
      </>
     );
}
 
export default Recipe;