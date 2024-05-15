import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebar } from "../redux/slices/authSlice";
import { MdOutlineSearch } from "react-icons/md";
import UserAvatar from "./UserAvatar";
import NotificationPanel from "./NotificationPanel";

const NavBar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center bg-white px-4 py-3 2xl:py-4 sticky z-10 top-0">
      <div className="flex gap-4">
        <button
          className="text-2xl text-gray-500 block md:hidden"
          onClick={() => dispatch(setOpenSidebar(true))}
        >
          ☰
        </button>
        <div className="w-64 2xl:w-[400px] flex items-center  px-3 gap-2 rounded-full bg-[#f3f4f6]">
          <MdOutlineSearch className="text-xl text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800 text-[16px]"
          />
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <NotificationPanel />
        <UserAvatar />
      </div>
    </div>
  );
};

export default NavBar;
