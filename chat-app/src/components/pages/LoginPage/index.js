import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PASSWORD, ADD_USERNAME, SET_STATUS } from "../../../redux/actions";
import { NavLink } from "react-router-dom";

function LoginPage() {
  const { userName } = useSelector((state) => state.userData);
  const { userPassword } = useSelector((state) => state.userData);
  const { status } = useSelector((state) => state.userData);
  const usernameError = useRef(null);
  const userPasswordError = useRef(null);
  const dispatch = useDispatch();

  const onLoginClick = () => {
    if (userName === "Aziza") {
      if (userPassword === "azipassword") {
        dispatch({ type: SET_STATUS });
      } else {
        userPasswordError.current.style.color = "red";
      }
    } else if (userName === "Izat") {
      if (userPassword === "izapassword") {
        dispatch({ type: SET_STATUS });
      } else {
        userPasswordError.current.style.color = "red";
      }
    } else {
      usernameError.current.style.color = "red";
    }
  };

  if (status) {
    return (
      <div className="flex items-center py-10 flex-col ">
        <div className="text-white text-5xl font-bold">Wellcome {userName}</div>
        <NavLink to='/chats' className="text-2xl text-white border border-1 py-2 px-4 my-10 hover:bg-white hover:text-black rounded-md">SEE MY CHATS</NavLink>
      </div>
    );
  } else {
    return (
      <section className="flex justify-center py-24">
        <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0 max-w-md">
          <div className="bg-black p-10 flex flex-col w-full shadow-xl rounded-xl">
            <h2 className="text-2xl font-bold text-gray-400 text-left mb-5">
              Login
            </h2>
            <div action="" className="w-full">
              <div id="input" className="flex flex-col w-full my-5">
                <label
                  ref={usernameError}
                  for="username"
                  className={
                    userName !== ""
                      ? "mb-2 text-gray-600"
                      : "mb-2 text-gray-300"
                  }
                >
                  Username
                </label>
                <input
                  onChange={(e) =>
                    dispatch({ type: ADD_USERNAME, payload: e.target.value })
                  }
                  type="text"
                  id="username"
                  placeholder="Please insert your username"
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                />
              </div>
              <div id="input" className="flex flex-col w-full my-5">
                <label
                  ref={userPasswordError}
                  for="password"
                  className={
                    userPassword !== ""
                      ? "mb-2 text-gray-600"
                      : "mb-2 text-gray-300"
                  }
                >
                  Password
                </label>
                <input
                  onChange={(e) =>
                    dispatch({ type: ADD_PASSWORD, payload: e.target.value })
                  }
                  type="password"
                  id="password"
                  placeholder="Please insert your password"
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                />
              </div>
              <div id="button" className="flex flex-col w-full my-5">
                <button
                  onClick={onLoginClick}
                  className="w-full py-4 bg-green-600 rounded-lg text-green-100"
                >
                  <h1 className="font-bold">Sigin</h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginPage;
