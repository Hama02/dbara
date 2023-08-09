import "./menu.css";
import chefImg from "../../assets/chef.png";
import chef2Img from "../../assets/chef2.png";
import chef3Img from "../../assets/chef3.png";
import chef4Img from "../../assets/chef4.png";
import plat1Img from "../../assets/couscous.png";
import plat2Img from "../../assets/mlou5iya.png";
import plat3Img from "../../assets/Calamrs.png";
import ratingStar from "../../assets/Path 23.png";
import filter from "../../assets/Union 2.png";

const Menu = () => {
  const meals = [
    {
      id: 0,
      title: "Couscous Osbane",
      img: plat1Img,
      location: "Ariana",
      left: "6",
      farAway: "15 km",
      available: true,
      ratings: "4.5",
      chefs: [chefImg, chef2Img, chef3Img, chef4Img],
    },
    {
      id: 1,
      title: "Mloukhia",
      img: plat2Img,
      location: "La Marsa",
      left: "12",
      farAway: "1.2 km",
      available: true,
      ratings: "4.5",
      chefs: [chefImg, chef4Img, chef2Img],
    },
    {
      id: 2,
      title: "Calamrs farcis",
      img: plat3Img,
      location: "Grand Tunis",
      left: "4",
      farAway: "2.5 km",
      available: true,
      ratings: "4.3",
      chefs: [chefImg, chef2Img],
    },
  ];
  return (
    <div className="menu bg-white mx-auto container">
      <div className="search">
        <form className="pt-10" style={{ width: "400px" }}>
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
              className="block outline-0 w-full p-4 pl-10 text-sm border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Trouver repas"
              required
            />
            <img
              src={filter}
              alt=""
              className="absolute w-6 cursor-pointer top-[16px] right-[5px]"
            />
          </div>
        </form>
      </div>
      <div className="title">
        <h1 className="font-bold text-sky-900">Repas du jour</h1>
        <h1>See all(45)</h1>
      </div>
      <div className="cards flex gap-6 mt-3 justify-center flex-wrap">
        {meals.map((meal) => (
          <div
            className="card w-96 bg-white shadow-xl mt-5 rounded"
            key={meal.id}
          >
            <figure className="max-h-56">
              <img className="h-[172%] object-cover" src={meal.img} alt="" />
            </figure>
            <div className="card-body px-3 flex flex-col">
              <div className="top">
                <h2 className="card-title text-sky-900 font-bold">
                  {meal.title}
                </h2>
                <div className="chefs">
                  {meal.chefs.map((chef) => (
                    <img src={chef} alt="" key={chef} />
                  ))}
                </div>
              </div>
              <div className="down flex justify-between">
                <h2 className="location">{meal.location}</h2>
                <div className="info flex gap-1">
                  <span className="left px-2">{meal.left} pers</span>
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
