import { PiTimerBold } from "react-icons/pi";
import { HiMiniFire } from "react-icons/hi2";

const Recipe = ({recipe, addRecipe}) => {
    const { image, title, description, ingredients_count, ingredients, cooking_time, calories } = recipe;

  return (
    <div>
      <div className="card space-y-6 p-4 rounded-2xl bg-base-100 shadow-sm">
        <figure className="h-60 rounded-2xl object-cover overflow-hidden">
          <img className="rounded-2xl object-cover w-full"
            src={image}
            alt={title}
          />
        </figure>
        <div className="space-y-4">
          <h3 className="card-title">{title}</h3>
          <p>{description}</p>
          <hr className="text-gray-300" />
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Ingredients: {ingredients_count}</h4>
          <ul className="list-disc pl-5 space-y-1">
            {ingredients.slice(0, 3).map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <hr className="text-gray-300" />
        </div>
        <div className="flex items-center gap-6"> 
          <p className="flex items-center gap-1.5"><PiTimerBold /> {cooking_time} minutes</p>
          <p className="flex items-center gap-1.5"><HiMiniFire /> {calories} kcal</p>
        </div>
        <div className="card-actions justify-end">
          <button onClick={() => addRecipe(recipe)} className="bg-emerald-400 text-white font-semibold px-4 py-2 rounded-full cursor-pointer">Want to Cook</button>
        </div>  
      </div>
    </div>
  );
};

export default Recipe;
