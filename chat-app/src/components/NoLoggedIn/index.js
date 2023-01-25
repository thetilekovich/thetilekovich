import React from "react";
import { NavLink } from "react-router-dom";

function NoLoggedIn() {
  return (
    <div className="py-16 flex items-center flex-col">
      <div className="text-orange-600 text-4xl ">
        Please Login to your account
      </div>
      <NavLink
        to="/"
        className="text-2xl text-white border border-1 py-2 px-4 my-10 hover:bg-white hover:text-black rounded-md"
      >
        LOG IN
      </NavLink>
    </div>
  );
}

export default NoLoggedIn;
