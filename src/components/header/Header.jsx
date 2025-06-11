import { MdOutlineAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <div className="navbar justify-between bg-base-100 shadow-sm">
        <div className="">
          <a className="text-xl font-bold">Recipe Calories</a>
        </div>
        <div className="flex gap-4 text-gray-700">
            <a href="#">Home</a>
            <a href="#">Recipes</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full bg-emerald-300">
                <MdOutlineAccountCircle className="p-1 w-full h-full" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
