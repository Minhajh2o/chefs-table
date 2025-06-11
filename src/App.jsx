import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Recipes from "./components/recipes/Recipes";
import SideBar from "./components/side bar/SideBar";

function App() {
  return (
    <>
      <div className="container max-w-7xl mx-auto">
        <Header />
          <div className="mt-12 mb-24">
            <Banner />
          </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3 border-2 border-gray-200 p-4">
            <Recipes />
          </div>
          <div className="md:w-1/3 border-2 border-gray-200 p-4">
            <SideBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
