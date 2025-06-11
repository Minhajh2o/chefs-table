import { useEffect, useState } from 'react';
import Recipe from '../recipe/Recipe';

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('Recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(err => console.error('Error fetching recipes:', err));
    }, [])

    return (
        <div>
            {recipes.map(recipe => (
                <Recipe key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};

export default Recipes;