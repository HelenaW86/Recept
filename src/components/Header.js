const Header = ({title}) => {
    return ( 
        <>
            {!title ? 
                <>
                    <h1>Välkommen till WA!</h1>
                    <p>Vi har sparat våra absoluta favoritrecept så vi kan dela med oss av dem.</p> 
                </>
                :
                <h1>{title}</h1>
            }
        </>
    );
}
 
export default Header;