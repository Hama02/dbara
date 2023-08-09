import chef1 from "../../assets/chef-alt1.png";
import chef2 from "../../assets/chef-alt2.png";
import chef3 from "../../assets/chef-alt3.png";
import chef4 from "../../assets/chef-alt4.png";

const Chefs = () => {
  return (
    <div className="chefs container mx-auto">
      <div className="title items-center justify-between flex pl-2">
        <h1 className="font-bold text-sky-900">Chefs</h1>
        <h1>See all(56)</h1>
      </div>
      <div className="content flex items-center gap-1 flex-wrap">
        <img src={chef1} alt="" className="w-36 rounded-full cursor-pointer" />
        <img src={chef2} alt="" className="w-36 rounded-full cursor-pointer" />
        <img src={chef3} alt="" className="w-36 rounded-full cursor-pointer" />
        <img src={chef4} alt="" className="w-36 rounded-full cursor-pointer" />
        <img src={chef1} alt="" className="w-36 rounded-full cursor-pointer" />
        <img src={chef1} alt="" className="w-36 rounded-full cursor-pointer" />
      </div>
    </div>
  );
};

export default Chefs;
