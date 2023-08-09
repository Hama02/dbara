import "./login.css";
import img1 from "../../assets/Group 333.png";
import img2 from "../../assets/Rectangle 197.png";

const Login = () => {
  return (
    <div className="login min-h-screen text-white flex item-center justify-center">
      <div className="container mx-auto z-10 relative flex flex-col justify-evenly items-center">
        <div className="login-title">DBARA</div>
        <form className="flex flex-col">
          <div className="relative mb-2">
            <img
              src={img1}
              alt=""
              className="absolute w-5 top-[18px] left-[7px]"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-72 placeholder:text-white placeholder:font-bold"
            />
          </div>
          <div className="relative mb-5">
            <img
              src={img2}
              alt=""
              className="absolute w-5 top-[21px] left-[7px]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-72 placeholder:text-white placeholder:font-bold"
            />
          </div>
          <a className="link link-accent text-right text-sm mt-[-16px]">
            Forget Password?
          </a>
          <button className="btn mt-5 btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
