import { useState,  } from "react";
import { Link } from "react-router-dom";

function RecipeGallery() {
  const [state, setState] = useState([]);
  const [recipes, setRecipes] = useState([])
  const getData = async () => {
    console.log("We got clicked!!");
    const data = await fetch("/recipes");
    console.log("data label hahaha!", data);
    const cleanData = await data.json();

    console.log("clean data", cleanData);
    setState(cleanData);
  };

  console.log("State !!!!!!!!!", state);

  //DELETE
  const deleteRecipe = async () => {
    const recipes = await fetch("/recipes");
    const cleanRecipe = await recipes.json();
    setRecipes(cleanRecipe)
  };

  const remove = async (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    const data = await fetch(`/recipes/${id}`, requestOptions);
    const cleanData = await data.json();
    console.log("We deleted!", cleanData);
    deleteRecipe();
  };

  //GALLERY
  return (
    <div className="GallerySpot">
      <button className="button" onClick={getData}>Grab recipes!</button>
      {state.map((recipe) => {
        return (
          <div>
            <h1>
              {" "}
              Chef:
              {recipe.chef}
            </h1>
            <h2>
              {" "}
              Dish:
              {recipe.dish}
            </h2>
            <h3>
              {" "}
              Ingredients:
              {recipe.ingredients}
            </h3>
            <h3>
              {" "}
              Instructions:
              {recipe.instructions}
            </h3>
            <h4>
              {" "}
              and it
              {recipe.hasGluten ? <span> does </span> : <span> does NOT </span>}
              have gluten.
            </h4>
            <h4>
              and it{" "}
              {recipe.hasPeanuts ? (
                <span> does </span>
              ) : (
                <span> does NOT </span>
              )}
              have Peanuts.
            </h4>
            <h4>
              and it{" "}
              {recipe.isVegan ? <span> is </span> : <span> is NOT </span>}{" "}
              Vegan.
            </h4>
            <h4>
              and it{" "}
              {recipe.isVegitarian ? <span> is </span> : <span> is NOT </span>}{" "}
              Vegitarian.
            </h4>
            <h4>
              {" "}
              and it{" "}
              {recipe.isBreakfast ? (
                <span> is </span>
              ) : (
                <span> is NOT </span>
              )}{" "}
              Breakfast.
            </h4>
            <h4>
              {" "}
              and it{" "}
              {recipe.isDinner ? <span> is </span> : <span> is NOT </span>}{" "}
              Dinner.
            </h4>
            <h4>
              {" "}
              and it{" "}
              {recipe.isDessert ? (
                <span> is </span>
              ) : (
                <span> is NOT </span>
              )}{" "}
              Dessert.
            </h4>
            <Link className="link" to={`/update/${recipe._id}`}>update</Link>
            <button className="button" onClick={() => remove(recipe._id)}> Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default RecipeGallery;
