import React from "react";
import { useSelector } from "react-redux";
import NoLoggedIn from "../../NoLoggedIn";

function Message({ el }) {
  const { userName } = useSelector((state) => state.userData);
  const { status } = useSelector((state) => state.userData);
  if (status) {
    if (el?.who === userName) {
      return (
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                  {el?.message}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  {el?.message}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else {
    <NoLoggedIn />;
  }
}

export default Message;
