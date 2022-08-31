import { Link } from "react-router-dom";

const RecipeCards = ({recipes}) => {
    return ( 
        <>
        { recipes.map((recipe) => {
            return (
              <article key={recipe.sys.id}>
                <Link to={`recipe/${recipe.sys.id}`}> Go!</Link>
                {/* ${chargerId} */}
                {console.log()}
                <h2>{ recipe.fields.title }</h2>
                <img src={recipe.fields.image.fields.file.url} alt={recipe.fields.title} />
                <p>{recipe.fields.summary}</p>
              </article>
            )
          })}
      </>
     );
}
 
export default RecipeCards;