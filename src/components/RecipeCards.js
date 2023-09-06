import { Link } from "react-router-dom";

const RecipeCards = ({ recipes, title }) => {
  return (
    <section className="recipe-list">
       <h2 className="list-title">{!title ? "Senaste Recepten" : title}</h2>
      {recipes.map((recipe) => {
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
    </section>
  );
}

export default RecipeCards;