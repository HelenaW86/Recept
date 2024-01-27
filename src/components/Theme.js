import { useNavigate } from "react-router-dom";

const Theme = ({ tags, onTagsChange }) => {
  const navigate = useNavigate();
  const themeTags = tags?.filter(tag => tag.sys.id.includes("theme"));

  return (
    <div className="theme-button-wrapper">
      {themeTags?.map(tag => {
          return (
            <button className="theme-button btn" key={tag?.sys.id} onClick={() => {onTagsChange(tag); navigate(`/${tag?.name}`) }} >
             {tag?.name}
            </button>
          )
      })}

    </div>
  );
};

export default Theme;