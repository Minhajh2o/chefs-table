import Item from "../item/Item";

const WantToCook = ({ wantToCook, addCurrentlyCooking }) => {
  console.log("Want to Cook recipes:", wantToCook);
  return (
    <div className="my-8">
      <div className="text-center space-y-2 w-2/3 mx-auto mb-4">
        <h3 className="text-lg font-bold">
          Want to cook:{" "}
          <span>{wantToCook.length.toString().padStart(2, "0")}</span>
        </h3>
        <hr className="text-gray-200" />
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
          {wantToCook.map((recipe, index) =>
            recipe ? (
              <Item
                key={index}
                recipe={recipe}
                index={index + 1}
                addCurrentlyCooking={addCurrentlyCooking} // Pass the function here
              />
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WantToCook;
