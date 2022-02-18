import { client } from "./client";
import { useState, useEffect } from "react";

function App() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
      })
      .catch(console.error);
  }, []);

  return <h1>Helena & Elins Recept!</h1>;
}

export default App;
