import { useNavigate } from "react-router-dom";

const Menu = ({ tags, onTagsChange }) => {
  const navigate = useNavigate();
  const categoryTags = tags?.filter(tag => tag.sys.id.includes("category"));
  const authorTags = tags?.filter(tag => tag.sys.id.includes("author"));
  return (
    <>
      <h2>Kategorier</h2>
      <ul>
        {categoryTags?.map(tag => {
          return (
            <li className="menu-item" key={tag?.sys.id}>
              <button onClick={() => {onTagsChange(tag); navigate(`/${tag?.name}`)}}>{tag?.name}</button>
            </li>
          );
        })}
      </ul>
      <h2>Matkreatörer</h2>
      <ul>
        {authorTags?.map(tag => {
          return (
            <li className="menu-item" key={tag?.sys?.id}>
              <button  onClick={() => {onTagsChange(tag); navigate(`/${tag?.name}`)}}>
              {tag?.name}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Menu;
