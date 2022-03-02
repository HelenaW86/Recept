import { client } from "./client";
import { useState, useEffect } from "react";

import RecipeCards from "./components/RecipeCards"
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState("")
  const [filteredRecipes, setFilteredRecipes] = useState([])


  useEffect(() => {
    client
      .getEntries()
      .then(response => {
        console.log(response.items);
        setRecipes(response.items);
        setFilteredRecipes(response.items)
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
      return recipe.metadata.tags[0].sys.id === tag.sys.id
    })
    setTitle(tag.name)
    setFilteredRecipes(filter);
  }
    
  return (
    <>
      <Navbar tags={tags} onTagsChange={onTagsChange} />
      <Header title={title}/>
      <RecipeCards recipes={filteredRecipes}  />
    </>
  );
}

export default App;
