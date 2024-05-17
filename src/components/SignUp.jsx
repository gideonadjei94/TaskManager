import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const SignUp = ({ toggleForm }) => {
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
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };
  return (
    <div className="w-full md:1/3 p-4 md:p-1 flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="form-container w-full md:w-[400px] flex flex-col gap-y-2 bg-white px-10 pt-8 pb-10"
      >
        <p className="text-blue-600 text-3xl font-bold text-center">
          Hey There!
        </p>
        <p className="text-center text-base text-gray-700 ">
          SignUp with email and password.
        </p>
        <div className="flex flex-col ">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={isAdmin}
              onChange={toggleAdmin}
            />
            <label className="text-[13px]">Are you an Admin?</label>
          </div>
          <button className="bg-blue-700 text-white text-sm py-2 px-12 mt-2 border rounded-md font-bold tracking-wider uppercase w-full">
            Register
          </button>
          <div className="flex items-center justify-center text-[12px] mt-5">
            <p className="font-semibold">Already have an account?</p>
            <button
              className="text-blue-700 font-semibold"
              onClick={handleSignupClick}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
