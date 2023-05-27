import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hideMenu } from "../utils/menuSlice";
import useConnectivity from "../utils/useConnectivity";
import { SEARCH_SUGGESTION } from "../utils/constant";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const handleMenuClose = () => {
    dispatch(hideMenu());
  };

  const checkConnection = useConnectivity();

  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_SUGGESTION + searchText);
    const json = await data.json();

    setSearchSuggestions(json[1]);
  };

  const handleOnClick = () => {
    console.log(searchSuggestions);
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
          onChange={handleOnChange}
          value={searchText}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button
          onClick={handleOnClick}
          className="py-2 px-5 bg-gray-400 rounded-r-full"
        >
          🔍
        </button>
      </div>
      {showSuggestions && (
        <div>
          <ul className="absolute bg-white p-4">
            {searchSuggestions.map((suggestion) => {
              return <li className="p-2">{suggestion}</li>;
            })}
          </ul>
        </div>
      )}
      <div className="p-2">{checkConnection ? "✅" : "❌"}</div>
      <div className="col-span-1">
        <img className="w-12" alt="user" src="./user.png" />
      </div>
    </div>
  );
};

export default Header;
