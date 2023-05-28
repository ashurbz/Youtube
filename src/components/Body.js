import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="grid grid-flow-col">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
