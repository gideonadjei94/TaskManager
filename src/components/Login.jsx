import React from "react";
import { useForm } from "react-hook-form";

const Login = ({ toggleForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = async (data) => {
    console.log("Submitted");
  };
  const handleSignupClick = () => {
    toggleForm();
  };
  return (
    <div className="w-full md:1/3 p-4 md:p-1 flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="form-container w-full md:w-[400px] flex flex-col gap-y-2 bg-white px-10 pt-8 pb-10"
      >
        <div className="">
          <p className="text-blue-600 text-3xl font-bold text-center">
            Welcome back!
          </p>
          <p className="text-center text-base text-gray-700 ">
            Sign In to Join team.
          </p>
        </div>
        <div className="flex flex-col ">
          <input type="text" placeholder="Full Name" id="input" required />
          <input type="email" placeholder="Email" id="input" required />
          <input
            type="text"
            placeholder="Role eg. Frontend Developer"
            id="input"
            required
          />
          <input type="password" placeholder="Team Code" id="input" required />

          <button className="bg-blue-700 text-white text-sm py-2 px-12 mt-2 border rounded-md font-bold tracking-wider uppercase w-full">
            Join Team
          </button>
          <div className="flex items-center justify-center text-[12px] mt-5">
            <p className="font-semibold">Want to create a team?</p>
            <button
              className="text-blue-700 font-semibold"
              onClick={handleSignupClick}
            >
              Create Team
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
