import "./menu.css";
import chefImg from "../../assets/chef.png";
import plat1Img from "../../assets/pexels-manon-thvnd-16255193.jpg";
import plat2Img from "../../assets/pexels-rdne-stock-project-5737454.jpg";
import ratingStar from "../../assets/Path 23.png";

const Menu = () => {
  const meals = [
    {
      id: 0,
      title: "Couscous Osbane",
      img: plat1Img,
      location: "Ariana",
      left: "12",
      farAway: "31 km",
      available: true,
      ratings: "4.5",
    },
    {
      id: 1,
      title: "Couscous Osbane",
      img: plat2Img,
      location: "Ariana",
      left: "12",
      farAway: "31 km",
      available: false,
      ratings: "4.5",
    },
    {
      id: 2,
      title: "Couscous Osbane",
      img: plat1Img,
      location: "Ariana",
      left: "12",
      farAway: "31 km",
      available: true,
      ratings: "4.5",
    },
  ];
  return (
    <div className="menu bg-white mx-auto p-4">
      <div className="search">
        <form className="px-10" style={{ width: "400px" }}>
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block outline-0 w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Trouver repas"
              required
            />
          </div>
        </form>
      </div>
      <div className="title px-16">
        <h1>Repas du jour</h1>
        <h1>See all(45)</h1>
      </div>
      <div className="cards flex gap-6 mt-3 justify-center flex-wrap">
        {meals.map((meal) => (
          <div className="card w-96 bg-white shadow-xl mt-5" key={meal.id}>
            <figure>
              <img className="h-64" src={meal.img} alt="" />
            </figure>
            <div className="card-body px-3 flex flex-col">
              <div className="top">
                <h2 className="card-title text-black">{meal.title}</h2>
                <div className="chefs">
                  <img src={chefImg} alt="" />
                  <img src={chefImg} alt="" />
                  <img src={chefImg} alt="" />
                  <img src={chefImg} alt="" />
                </div>
              </div>
              <div className="down flex justify-between mt-2 px-2">
                <h2 className="location">{meal.location}</h2>
                <div className="info flex gap-1">
                  <span className="left px-2">{meal.left}</span>
                  <span className="far px-2">{meal.farAway}</span>
                </div>
              </div>
              <span
                className="available"
                style={{ color: meal.available ? "rgb(148, 233, 22)" : "red" }}
              >
                {meal.available ? "Dispo" : "No Dispo"}
              </span>
              <span className="ratings flex items-center gap-1">
                <img src={ratingStar} alt="" className="h-3" />
                {meal.ratings}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
