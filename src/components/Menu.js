import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Menu = ({ tags, onTagsChange }) => {
  const navigate = useNavigate();
  const categoryTags = tags.filter(tag => tag.sys.id.includes("category"));
  const authorTags = tags.filter(tag => tag.sys.id.includes("author"));
  console.log(tags)
  return (
    <>
      <p>Kategorier</p>
      <ul>
        {categoryTags.map(tag => {
          return (
            <li className="menu-item" key={tag.sys.id}>
              <button onClick={() => onTagsChange(tag, 0) }>{tag.name}</button>
            </li>
          );
        })}
      </ul>
      <p>Matkreatörer</p>
      <ul>
        {authorTags.map(tag => {
          return (
            <li className="menu-item" key={tag.sys.id}>
              <button  onClick={() => {onTagsChange(tag, 0); navigate(`/${tag.name}`)}}>
              {tag.name}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Menu;
