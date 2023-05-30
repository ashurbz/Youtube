import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBar = () => {
  const menuBar = useSelector((store) => {
    return store.appSlice.menuOpen;
  });

  return !menuBar ? null : (
    <div className="col-span-2">
      <div className="shadow-lg">
        <ul className="p-2">
          <li className="font-bold text-lg">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/demo">Demo</Link>
          </li>
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
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movie</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
