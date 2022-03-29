import styled from "styled-components";

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const Menu = ({ tags, onTagsChange }) => {
  const categoryTags = tags.filter(tag => tag.sys.id.includes("category"));
  return (
    <ul>
      {categoryTags.map(tag => {
        return (
          <li key={tag.sys.id}>
            <Button onClick={() => onTagsChange(tag, 0)}>{tag.name}</Button>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
