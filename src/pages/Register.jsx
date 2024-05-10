import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const user = "";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    console.log("Submitted");
  };
  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="bg-blue-200 bg-gradient-to-r from-gray-200 to-blue-200 h-screen flex items-center justify-center flex-col">
      <div
        className={`bg-white rounded-2xl shadow-md relative overflow-hidden w-[768px] max-w-full min-h-[400px] contain ${
          isActive ? "active" : ""
        }`}
      >
        <div className="form-contain sign-up">
          <form
            className="flex items-center justify-center flex-col bg-white px-[40px] h-[100%]"
            onSubmit={handleSubmit(submitHandler)}
          >
            <p className="mb-14 font-extrabold">
              <span className="text-blue-700 ">Bee</span>
              Tasked
            </p>
            <h1 className="text-4xl font-extrabold text-blue-700">
              Create Account
            </h1>
            <span className="text-sm mt-2 mb-2 font-bold">
              Sign Up with your details to get started
            </span>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className="bg-blue-700 text-white text-sm py-2 px-12 border rounded-md font-extrabold tracking-wider uppercase mb-4 mt-2">
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-contain sign-in">
          <form
            className="flex items-center justify-center flex-col bg-white px-[40px] h-[100%]"
            onSubmit={handleSubmit(submitHandler)}
          >
            <p className="mb-14 font-extrabold">
              <span className="text-blue-700 ">Bee</span>
              Tasked
            </p>
            <h1 className="text-4xl font-extrabold text-blue-700">Sign In</h1>
            <span className="text-sm mt-2 mb-2 font-bold">
              Sign in with your email and password
            </span>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <a href="#" className="text-sm mt-3 mb-3">
              Forgot Password?
            </a>
            <button className="bg-blue-700 text-white text-sm py-2 px-12 border rounded-md font-extrabold tracking-wider uppercase">
              Sign In
            </button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1 className="text-4xl font-bold">Hey There!</h1>
              <p className="text-[13px] leading-20 tracking-tight mt-2 mb-5 font-bold text-white ">
                Already have an account ? Log In to continue
              </p>
              <button
                className="bg-blue-700 text-white text-sm py-2 px-12 border rounded-md font-semibold tracking-wider uppercase bg-transparent border-white"
                onClick={handleClick}
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="toggle-panel toggle-right">
            <h1 className="text-4xl font-bold text-white">Hey There!</h1>
            <p className="text-[16px] leading-20 tracking-tight mt-2 mb-5 font-bold text-white ">
              Get Tasked Or Assign tasks to your team members now with{" "}
              <span className="font-extrabold text-black">BeeTasked</span>
            </p>
            <button
              className="bg-blue-700 text-white text-sm py-2 px-12 border rounded-md font-semibold tracking-wider uppercase bg-transparent border-white"
              onClick={handleClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
