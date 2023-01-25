import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MODE_CHANGE } from "../../redux/actions";
import { NavLink } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.userData);
  const { userName } = useSelector((state) => state.userData);
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
          <div
            className="flex justify-center items-center w-full lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex mt-4 font-medium lg:space-x-8 lg:mt-0">
              {status ? (
                <li>
                  <NavLink
                    to="/"
                    className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-white"
                    aria-current="page"
                  >
                    {userName}
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink
                    to="/"
                    className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-white"
                    aria-current="page"
                  >
                    LogIn
                  </NavLink>
                </li>
              )}

              <li>
                <NavLink
                  to="/chats"
                  className="block py-2 pr-4 pl-3 text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:bg-transparent"
                >
                  My chats
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
