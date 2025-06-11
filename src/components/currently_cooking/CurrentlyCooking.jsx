import Item from '../item/Item';

const CurrentlyCooking = ({ currentlyCooking }) => {
  const totalTime = currentlyCooking.reduce((sum, recipe) => sum + recipe.cooking_time, 0);
  const totalCalories = currentlyCooking.reduce((sum, recipe) => sum + recipe.calories, 0);

  return (
    <div className="mt-8 mb-4">
      <div className="text-center space-y-2 w-2/3 mx-auto mb-4">
        <h3 className="text-lg font-bold">Currently cooking: <span>{currentlyCooking.length.toString().padStart(2, '0')}</span></h3>
        <hr className='text-gray-200'/>
      </div>
      <table className="table w-full text-sm">
        <thead className="text-left border-b">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentlyCooking.map((recipe, index) => (
            <Item key={index} recipe={recipe} index={index + 1} />
          ))}
          <tr className='text-gray-600 font-medium'>
            <td colSpan="2" className="text-right">Total:</td>
            <td className="py-2">{totalTime} minutes</td>
            <td className="py-2">{totalCalories} calories</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CurrentlyCooking;
