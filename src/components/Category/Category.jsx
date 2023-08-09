import Entree from "../../assets/Entree.jpg";
import Plat from "../../assets/Plats.jpg";
import Dessert from "../../assets/Dessert.jpg";
import "./category.css";

const Category = () => {
  return (
    <div className="category bg-white container mx-auto">
      <div className="title items-center justify-between flex pl-2">
        <h1 className="font-bold text-sky-900">Category</h1>
        <h1>See all(12)</h1>
      </div>
      <div className="cards p-10 flex flex-wrap gap-10">
        <div className="card1 category-item w-60 rounded-md overflow-hidden h-40 cursor-pointer relative">
          <img src={Entree} alt="" />
          <h2 className="">Entree</h2>
        </div>
        <div className="card2 category-item w-60 rounded-md overflow-hidden h-40 cursor-pointer relative">
          <img src={Plat} alt="" />
          <h2 className="">Plats</h2>
        </div>
        <div className="card3 category-item w-60 rounded-md overflow-hidden h-40 cursor-pointer relative">
          <img src={Dessert} alt="" />
          <h2 className="">Dessert</h2>
        </div>
      </div>
    </div>
  );
};

export default Category;
