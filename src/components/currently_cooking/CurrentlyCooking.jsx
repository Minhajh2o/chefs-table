import Item from '../item/Item';

const CurrentlyCooking = ({ currentlyCooking }) => {
//   const totalTime = currentlyCooking.reduce((sum, recipe) => sum + recipe.cooking_time, 0);
//   const totalCalories = currentlyCooking.reduce((sum, recipe) => sum + recipe.calories, 0);

  return (
    <div className="mt-8">
      {/* <h2 className="font-bold text-lg mb-4">Currently cooking: {currentlyCooking.length.toString().padStart(2, '0')}</h2>

      <table className="w-full mb-4">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-2 px-2">#</th>
            <th className="py-2 px-2">Name</th>
            <th className="py-2 px-2">Time</th>
            <th className="py-2 px-2">Calories</th>
          </tr>
        </thead>
        <tbody>
          {currentlyCooking.map((recipe, index) => (
            <Item key={index} recipe={recipe} index={index + 1} />
          ))}
        </tbody>
      </table>

      <div className="font-medium text-right">
        <p>Total Time = {totalTime} minutes</p>
        <p>Total Calories = {totalCalories} calories</p>
      </div> */}
    </div>
  );
};

export default CurrentlyCooking;
