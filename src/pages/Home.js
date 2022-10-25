import Theme from '../components/Theme';
import Header from '../components/Header'
import RecipeCards from '../components/RecipeCards';

const Home = ({ recipes, title, onTagsChange, tags }) => {
    return ( 
        <>            
            <Header title={title} />
            <Theme onTagsChange={onTagsChange} tags={tags}/>
            <RecipeCards recipes={recipes} />
        </>
     );
}

export default Home;