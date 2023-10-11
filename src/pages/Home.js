import RecipeCards from '../components/RecipeCards';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';


const Home = ({ recipes, title, onTagsChange, tags, resetRecipes, setToggle, toggle }) => {
  return (
    <>
      <Navbar
        tags={tags}
        onTagsChange={onTagsChange}
        toggle={toggle}
        setToggle={setToggle}
        resetRecipes={resetRecipes}
      />
      <Hero title={title} onTagsChange={onTagsChange} tags={tags} resetRecipes={resetRecipes}/>
      <RecipeCards recipes={recipes} title={title} />
    </>
  );
}

export default Home;