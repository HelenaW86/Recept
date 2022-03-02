const Navbar = ({tags, onTagsChange}) => {
    return ( 
        <nav>
        { tags.map((tag) => {
          return <button key={tag.sys.id} onClick={() => onTagsChange(tag) }>{tag.name}</button>
        })}
       </nav>
     );
}
 
export default Navbar;