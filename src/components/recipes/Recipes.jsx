import { useEffect, useState } from 'react';
import Recipe from '../recipe/Recipe';

const Recipes = ({ addRecipe }) => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('Recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(err => console.error('Error fetching recipes:', err));
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {recipes.map(recipe => (
                <Recipe key={recipe.id} recipe={recipe} addRecipe={addRecipe} />
            ))}
        </div>
    );
};

export default Recipes;