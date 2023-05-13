import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const btnName = [
    "All",
    "Mixes",
    "live",
    "Music",
    "Bollywood",
    "Comedy",
    "Thrillers",
    "JavaScript",
    "TMKOC",
    "Adventures",
    "Travel",
    "Movies",
  ];

  return (
    <>
      <div className="flex p-3">
        {btnName.map((name, index) => {
          return <Button name={name} key={index} />;
        })}
      </div>
    </>
  );
};

export default ButtonList;
