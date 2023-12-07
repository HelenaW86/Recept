import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RecipeCards from "../components/RecipeCards";

export const CreatorPage = ({recipes, title, tags, onTagsChange, toggle, setToggle, resetRecipes}) => {
  const { creator } = useParams();
  return (
    <>
      <Navbar
        tags={tags}
        onTagsChange={onTagsChange}
        toggle={toggle}
        setToggle={setToggle}
        resetRecipes={resetRecipes}
      />
      <Hero
        onTagsChange={onTagsChange}
        tags={tags}
        resetRecipes={resetRecipes}
      />
      <RecipeCards recipes={recipes} title={title} />
    </>
  );
}