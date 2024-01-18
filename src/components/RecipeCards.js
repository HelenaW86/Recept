import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MoreButton } from "./buttons/MoreButton";


const RecipeCards = ({ recipes, title }) => {
  const {creator} = useParams();
  const [amount, setAmount] = useState(2)
  useEffect(() => {setAmount(2)},[title]);

  const filter = creator ? recipes.filter((recipe) => {
    if(recipe.metadata.tags[0]?.sys.id.includes("author")){
      return recipe.metadata.tags[0]?.sys.id.includes(creator);
    }
    else if(recipe.metadata.tags[0]?.sys.id.includes(creator.charAt(0).toUpperCase() + creator.slice(1)))
    {
      return recipe.metadata.tags[0]?.sys.id.includes(creator.charAt(0).toUpperCase() + creator.slice(1));
    }
    else{
     return recipe.metadata.tags[1]?.sys.id.includes(creator.charAt(0).toUpperCase() + creator.slice(1))
    }
  }) : recipes;

       
console.log(recipes)
console.log(filter)
   

  const getRecipes = () => {
    setAmount(prev => (prev + 2));
  }
  return (
    <section className="recipe-list">
      <h2 className="list-title">{title}</h2>
      {filter.slice(0, amount).map((recipe) => {
        return (
          <article className="recipe-card-wrapper" key={recipe.sys.id}>
            <Link className="recipe-card" to={`/${creator ?? "recipe"}/${recipe.fields.slug}`}>
              <div className="recipe-img-wrapper">
                <img className="recipe-img" src={recipe.fields.image.fields.file.url} alt={recipe.fields.title} />
              </div>
              <div className="recipe-content">
                <div>
                  <h3 className="recipe-title">{recipe.fields.title}</h3>
                  <p className="recipe-description">{recipe.fields.summary}</p>
                </div>
                <span>{recipe.fields.time} min</span>
              </div>
            </Link>
          </article>
        )
      })}
      { filter.length > amount && <MoreButton getRecipes={getRecipes} /> }
    </section>
  );
}

export default RecipeCards;