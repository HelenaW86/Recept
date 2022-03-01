const RecipeCards = ({recipes}) => {
    return ( 
        <>
        { recipes.map((recipe) => {
            return (
              <article key={recipe.sys.id}>
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