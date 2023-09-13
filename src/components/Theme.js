import styled from "styled-components";

const Theme = ({ tags, onTagsChange }) => {
  const themeTags = tags.filter(tag => tag.sys.id.includes("theme"));
  return (
    <div className="theme-button-wrapper">
      {themeTags.map(tag => {
          return (
            <button className="theme-button btn" key={tag.sys.id} onClick={() => onTagsChange(tag, 1)} >
             {tag.name}
            </button>
          )
      })}
    </div>
  );
};

export default Theme;
