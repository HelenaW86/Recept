import { Link } from "react-router-dom";

const RecipeCards = ({ recipes }) => {
  return (
    <>
      {recipes.map((recipe) => {
        return (
          <article className="recipe-card" key={recipe.sys.id}>
            <Link to={`recept/${recipe.fields.slug}`}>
              <h2 className="recipe-title">{recipe.fields.title}</h2>
              <img className="recipe-img" src={recipe.fields.image.fields.file.url} alt={recipe.fields.title} />
              <p>{recipe.fields.summary}</p>
            </Link>
          </article>
        )
      })}
    </>
  );
}

export default RecipeCards;