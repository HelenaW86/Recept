import RecipeCards from '../components/RecipeCards';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


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
      <Hero onTagsChange={onTagsChange} tags={tags} resetRecipes={resetRecipes}/>
      <Link to={"/outlet"} >Outlet</Link>
      <RecipeCards recipes={recipes} title={title} />
    </>
  );
}

export default Home;