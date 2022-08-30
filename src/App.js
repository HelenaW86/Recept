import { client } from "./client";
import { useState, useEffect } from "react";

import RecipeCards from "./components/RecipeCards";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Theme from "./components/Theme";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    client
      .getEntries()
      .then(response => {
        console.log(response.items);
        setRecipes(response.items);
        setFilteredRecipes(response.items);
      })
      .catch(console.error);

    client
      .getTags()
      .then(response => {
        console.log(response.items);
        setTags(response.items);
      })
      .catch(console.error);
  }, []);

  const onTagsChange = (tag, group) => {
    console.log("klickat", tag);
    const filter = recipes.filter(recipe => {
      return recipe.metadata.tags[group]?.sys.id === tag.sys.id;
    });
    setTitle(tag.name);
    setFilteredRecipes(filter);
    setToggle(false);
  };

  return (
    <>
      <Navbar
        tags={tags}
        onTagsChange={onTagsChange}
        toggle={toggle}
        setToggle={setToggle}
      />
      <Header title={title} />
      <Theme tags={tags} onTagsChange={onTagsChange} />
      <RecipeCards recipes={filteredRecipes} />
      {/* <Home 
        title={title}
        tags={tags}
        onTagsChange={onTagsChange} 
        filteredRecipes={filteredRecipes} /> */}
    </>
  );
}

export default App;
