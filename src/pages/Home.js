import Hero from '../components/Hero';
const Home = ({children, tags, onTagsChange, resetRecipes}) => {

  return (
    <>
      <Hero onTagsChange={onTagsChange} tags={tags} resetRecipes={resetRecipes}/>
      {children}
    </>
  );
}

export default Home;