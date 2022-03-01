import { client } from "./client";
import { useState, useEffect } from "react";

import RecipeCards from "./components/RecipeCards"

function App() {
  const [recipes, setRecipes] = useState([]);
  const [tags, setTags] = useState([]);



  useEffect(() => {
    client
      .getEntries()
      .then(response => {
        console.log(response.items);
        setRecipes(response.items);
      })
      .catch(console.error);

    client
      .getTags()
      .then(response => {
        console.log(response.items);
        setTags(response.items)
      })
      .catch(console.error)

  }, []);

  const onTagsChange = (tag) => {
    console.log('klickat', tag);
    const filter = recipes.filter((recipe) => {
      return recipe.metadata.tags[0].sys.id === tag
    })
    console.log(filter);
  }
    
  return (
    <>
      <nav>
       { tags.map((tag) => {
         return <button key={tag.sys.id} onClick={onTagsChange(tag.sys.id)}>{tag.name}</button>
       })}
      </nav>
      <h1>Helena och Elins Resept!</h1>
      
      <RecipeCards recipes={recipes} />
    </>
  );
}

export default App;
