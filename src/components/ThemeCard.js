import styled from "styled-components";

const Card = styled.div`
  background-image: url("https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  margin: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.h3`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  text-align: center;
  color: white;
  padding: 5px;
  text-transform: uppercase;
`;

const ThemeCard = ({ tag, onTagsChange }) => {
  return (
    <Card onClick={() => onTagsChange(tag, 1)}>
      <Title>{tag.name}</Title>
    </Card>
  );
};

export default ThemeCard;
