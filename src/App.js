import { client } from "./client";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Theme from "./components/Theme";
import Recipe from "./components/Recipe";
import Home from "./pages/Home";

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
      <Routes> 
        <Route path="/" element={<Home recipes={filteredRecipes} title={title} tags={tags} onTagsChange={onTagsChange}/>} />
        <Route path="recept/:recipeSlug" element={<Recipe recipes={recipes} />} />
      </Routes>
      <footer style={{backgroundColor: "grey", height: "50px"}}>FOOOTER</footer>
    </>
  );
}

export default App;
