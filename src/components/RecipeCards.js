import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MoreButton } from "./buttons/MoreButton";

const RecipeCards = ({ recipes, title }) => {
  const { slug } = useParams();
  const [amount, setAmount] = useState(2);
  useEffect(() => {
    setAmount(2);
  }, [title]);

  const slugFunction = () => {
    switch (slug) {
      case "kött":
        return "ktt";
      case "fågel":
        return "fgel";
      default:
        return slug;
    }
  };

  const GetTitle = () => {
    let t
    if (slug) {
      if (slug === "helena" || slug === "elin" || slug === "anna" || slug === "sara") {
        t = slug  + "s recept";
      } else {
        t = slug;
      }
    } else {
      t = title
    }
    return <h2 className="list-title">{t}</h2>;
  };

  let uppdatedSlug = slugFunction();

  const filter = uppdatedSlug
    ? recipes.filter((recipe) => {
        return recipe.metadata.tags.some((t) =>
          t.sys.id.toLowerCase().includes(uppdatedSlug.toLocaleLowerCase())
        );
      })
    : recipes;


  const getRecipes = () => {
    setAmount((prev) => prev + 2);
  };
  return (
    <section className="recipe-list">
      <GetTitle />
      {filter.slice(0, amount).map((recipe) => {
        return (
          <article className="recipe-card-wrapper" key={recipe.sys.id}>
            <Link
              className="recipe-card"
              to={`/${uppdatedSlug ?? "recipe"}/${recipe.fields.slug}`}>
              <div className="recipe-img-wrapper">
                <img
                  className="recipe-img"
                  src={recipe.fields.image.fields.file.url}
                  alt={recipe.fields.title}
                />
              </div>
              <div className="recipe-content">
                <div>
                  <h3 className="recipe-title">{recipe.fields.title}</h3>
                  <p className="recipe-description">{recipe.fields.summary}</p>
                </div>
                <div className="recipe-extra-information">
                <span>{recipe.fields.time && recipe.fields.time + " min"}</span>
                <span className="recipe-cred">{recipe?.fields?.cred}</span>
                </div>
              </div>
            </Link>
          </article>
        );
      })}
      {filter.length > amount && <MoreButton getRecipes={getRecipes} />}
    </section>
  );
};

export default RecipeCards;
