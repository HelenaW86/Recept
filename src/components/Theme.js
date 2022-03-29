const Theme = ({ tags, onTagsChange }) => {
  const themeTags = tags.filter(tag => tag.sys.id.includes("theme"));
  return (
    <nav>
      {themeTags.map(tag => {
        return (
          <button key={tag.sys.id} onClick={() => onTagsChange(tag, 1)}>
            {tag.name}
          </button>
        );
      })}
    </nav>
  );
};

export default Theme;
