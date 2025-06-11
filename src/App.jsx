import { useState } from "react";
import Banner from "./components/banner/Banner";
import CurrentlyCooking from "./components/currently_cooking/CurrentlyCooking";
import Header from "./components/header/Header";
import Recipes from "./components/recipes/Recipes";
import WantToCook from "./components/want_to_cook/WantToCook";

function App() {
  const [wantToCook, setWantToCook] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const addRecipe = (recipe) => {
    console.log("Recipe added:", recipe);
    setWantToCook((wantToCook) => [...wantToCook, recipe]);
  };

  const addCurrentlyCooking = (recipe) => {
    console.log("Currently cooking recipe added:", recipe);
    setCurrentlyCooking([...currentlyCooking, { ...recipe, isPreparing: true }]);
    const updatedWantToCook = wantToCook.filter(item => item.id !== recipe.id);
    setWantToCook(updatedWantToCook);
  };

  return (
    <>
      <div className="container max-w-7xl mx-auto">
        <Header />
        <div className="mt-12 mb-24">
          <Banner />
        </div>
        <div className="text-center my-8 w-2/3 mx-auto">
          <h1 className="text-3xl font-bold">Our Recipes</h1>
          <p className="mt-6 text-gray-600">
            Explore our diverse collection of recipes, carefully crafted to
            inspire your culinary journey. From quick weeknight dinners to
            elaborate feasts, we have something for every occasion.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            <Recipes addRecipe={addRecipe} />
          </div>
          <div className="md:w-1/3 max-h-fit border border-gray-200 rounded-2xl">
            <WantToCook
              wantToCook={wantToCook}
              addCurrentlyCooking={addCurrentlyCooking}
            />
            <CurrentlyCooking currentlyCooking={currentlyCooking} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
