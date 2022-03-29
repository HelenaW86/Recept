const Navbar = ({ tags, onTagsChange }) => {
  const categoryTags = tags.filter(tag => tag.sys.id.includes("category"));
  return (
    <nav>
      {categoryTags.map(tag => {
        return (
          <button key={tag.sys.id} onClick={() => onTagsChange(tag, 0)}>
            {tag.name}
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;
