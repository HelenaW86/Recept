import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const RecipeCards = ({ recipes, title }) => {
  const [amount, setAmount] = useState(2)

  useEffect(() => {setAmount(2)},[title]);

  const getRecipes = () => {
    setAmount(prev => (prev + 2));
  }

  return (
    <section className="recipe-list">
      <h2 className="list-title">{title}</h2>
      {recipes.slice(0, amount).map((recipe) => {
        return (
          <article className="recipe-card-wrapper" key={recipe.sys.id}>
            <Link className="recipe-card" to={`recept/${recipe.fields.slug}`}>
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
      { recipes.length > amount && <button className="btn primary-btn" onClick={getRecipes}>Visa fler</button> }
    </section>
  );
}

export default RecipeCards;