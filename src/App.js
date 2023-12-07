import { client } from "./client";
import { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Theme from "./components/Theme";
import Recipe from "./pages/Recipe";
import Home from "./pages/Home";
import { CreatorPage } from "./pages/CreatorPage";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState("Senaste recepten");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [latestRecipes, setLatestRecipes] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        const orderedRecipes = response?.items.sort((a, b) => {
          return new Date(b.sys.createdAt) - new Date(a.sys.createdAt);
        });
        setRecipes(orderedRecipes);
        setLatestRecipes(orderedRecipes);
        setFilteredRecipes(orderedRecipes);
      })
      .catch(console.error);

    client
      .getTags()
      .then((response) => {
        setTags(response.items);
      })
      .catch(console.error);
  }, []);

  const onTagsChange = (tag, group) => {
    const filter = recipes.filter((recipe) => {
      return recipe.metadata.tags[group]?.sys.id === tag?.sys.id;
    });
    setTitle(tag?.name);
    setFilteredRecipes(filter);
    setToggle(false);
  };

  const getCreator = (tag, group) => {
    onTagsChange(tag, group);
  };

  const resetRecipes = () => {
    setFilteredRecipes(latestRecipes);
    setTitle("Senaste Recepten");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home
                recipes={filteredRecipes}
                title={title}
                tags={tags}
                onTagsChange={onTagsChange}
                toggle={toggle}
                setToggle={setToggle}
                resetRecipes={resetRecipes}
              />
              <Outlet />
            </>
          }
        >
          <Route
                path="/outlet"
                element={
                  <h2>OUTLET</h2>
                }
              ></Route>
        </Route>
        <Route
          path="recept/:recipeSlug"
          element={<Recipe recipes={recipes} />}
        />
        <Route
          path="/:creator"
          element={
            <CreatorPage
              title={title}
              recipes={filteredRecipes}
              tags={tags}
              onTagsChange={onTagsChange}
              toggle={toggle}
              setToggle={setToggle}
              resetRecipes={resetRecipes}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
