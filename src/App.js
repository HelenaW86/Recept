import { client } from "./client";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Theme from "./components/Theme";
import Recipe from "./components/Recipe";
import Home from "./pages/Home";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [latestRecipes, setLatestRecipes] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then(response => {
        const orderedRecipes = response?.items.sort((a, b) => { return new Date(b.sys.createdAt) - new Date(a.sys.createdAt)});
        setRecipes(orderedRecipes);
        setLatestRecipes(orderedRecipes.slice(0, 5));
        setFilteredRecipes(orderedRecipes.slice(0, 5));
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
      return recipe.metadata.tags[group]?.sys.id === tag?.sys.id;
    });
    setTitle(tag?.name);
    setFilteredRecipes(filter);
    setToggle(false);
  };

  const resetRecipes = () => {
    setFilteredRecipes(latestRecipes);
    setTitle(null);
  }

  return (
    <>
      <Navbar
        tags={tags}
        onTagsChange={onTagsChange}
        toggle={toggle}
        setToggle={setToggle}
        resetRecipes={resetRecipes}
      />
      <Routes> 
        <Route path="/" element={<Home recipes={filteredRecipes} title={title} tags={tags} onTagsChange={onTagsChange}/>} />
        <Route path="recept/:recipeSlug" element={<Recipe recipes={recipes} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
