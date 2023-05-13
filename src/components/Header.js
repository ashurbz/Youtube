import React from "react";
import { useDispatch } from "react-redux";
import { hideMenu } from "../utils/menuSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleMenuClose = () => {
    dispatch(hideMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="col-span-1 flex">
        <img
          className=" mt-1 h-10 mx-4 cursor-pointer"
          alt="hamburger"
          src="./hamburger.png"
          onClick={() => {
            handleMenuClose();
          }}
        />
        <img className="w-28" alt="logo" src="./youtube.png" />
      </div>
      <div className="col-span-10 text-center">
        <input
          className="w-1/2 border border-green-100 bg-green-100 rounded-l-full p-2"
          type="text"
          placeholder="Search"
        />
        <button className="py-2 px-5 bg-gray-400 rounded-r-full">🔍</button>
      </div>
      <div className="col-span-1">
        <img className="w-12" alt="user" src="./user.png" />
      </div>
    </div>
  );
};

export default Header;
