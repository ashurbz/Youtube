import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const menuBar = useSelector((store) => {
    return store.appSlice.menuOpen;
  });

  return !menuBar ? null : (
    <div className="col-span-2">
      <div className="shadow-lg">
        <ul className="p-2">
          <li className="font-bold text-lg">Home</li>
          <li>Shots</li>
          <li>Originals</li>
          <li>Music</li>
        </ul>
        <h1 className="font-bold text-lg p-2"> Subscriptions </h1>
        <ul className="p-1">
          <li>Aaj Tak</li>
          <li>Abhishek Upmanyu</li>
          <li>Akshay Saini</li>
          <li>Ashish</li>
        </ul>
        <h1 className="font-bold text-lg p-2"> Explore </h1>
        <ul className="p-1">
          <li>Tredning</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movie</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
