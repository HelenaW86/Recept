import { useParams } from "react-router-dom";

export const CreatorPage = () => {
  const { creator } = useParams();
  return(
    <h1>Page</h1>
  )
}