import RecipeCards from '../components/RecipeCards';
import Hero from '../components/Hero';


const Home = ({ recipes, title, onTagsChange, tags }) => {
  return (
    <>
      <Hero title={title} onTagsChange={onTagsChange} tags={tags} />
      <RecipeCards recipes={recipes} title={title} />
    </>
  );
}

export default Home;