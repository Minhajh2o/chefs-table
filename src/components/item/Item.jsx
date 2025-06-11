const Item = ({ recipe, index, addCurrentlyCooking }) => {
  if (!recipe) return null;
  const { title, cooking_time, calories, isPreparing } = recipe;
  console.log("Item recipe:", recipe);
  console.log("Item index:", index);

return (
    <tr className="text-gray-500 border-t border-gray-100 bg-gray-100">
        <td className="py-2 pl-4 pr-2">{index}</td>
        <td className="py-2 px-2">{title}</td>
        <td className="py-2 ">{cooking_time} minutes</td>
        <td className="py-2">{calories} calories</td>
        {/* <td className="py-2 px-0">
            <button onClick={() => addCurrentlyCooking(recipe)} className="bg-emerald-400 text-white font-semibold px-4 py-2 rounded-full cursor-pointer mr-4">Preparing</button>
        </td> */}
         <td className="py-2 px-0">
        {!isPreparing && addCurrentlyCooking && (
          <button
            onClick={() => addCurrentlyCooking(recipe)}
            className="bg-emerald-400 text-white font-semibold px-4 py-2 rounded-full cursor-pointer mr-4"
          >
            Preparing
          </button>
        )}
      </td>
    </tr>
  );
};

export default Item;
