import React, { useEffect } from "react";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { ADD_DATA, INPUT_CHANGE } from "../../../redux/actions";
import axios from "axios";
import NoLoggedIn from "../../NoLoggedIn";
import profileVid from '../../../assets/video/IMG_5761.MOV'

function ChatPage() {
  const dispatch = useDispatch();
  const { inputValue } = useSelector((state) => state.inputValue);
  const { userName } = useSelector((state) => state.userData);
  const { chatData } = useSelector((state) => state.chatData);
  const { status } = useSelector((state) => state.userData);


  const handleChange = (e) => {
    dispatch({ type: INPUT_CHANGE, payload: e.target.value });
  };

  const sendData = async () => {
    try {
      await axios.post(
        "https://63ab2e2acf281dba8c1d11c7.mockapi.io/api/v1/chat",
        {
          message: inputValue,
          who: userName,
        }
      );
      getData();
    } catch (error) {
      console.log(error.message);
    }
  };

  const getData = async () => {
    try {
      const api = await axios(
        "https://63ab2e2acf281dba8c1d11c7.mockapi.io/api/v1/chat"
      );
      const { data } = await api;
      dispatch({ type: ADD_DATA, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (status) {
    return (
      <section>
        <div className="flex-1 p:2 sm:px-6 justify-between flex flex-col h-screen ">
          <div className="flex sm:items-center justify-between py-2 border-b-2 border-gray-200">
            <div className="relative flex items-center space-x-4">
              <div className="relative">
                <span className="absolute text-green-500 right-0 bottom-0">
                  <svg width="20" height="20">
                    <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                  </svg>
                </span>
                <video
                src={profileVid}
                autoplay={true}
                  alt=""
                  className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <div className="text-2xl mt-1 flex items-center">
                  <span className="text-white mr-3">Our Group</span>
                </div>
              </div>
            </div>
          </div>
          <div
            id="messages"
            className="flex flex-col justify-start h-auto space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
          >
            {chatData.map((el) => (
              <Message el={el} key={el.id} />
            ))}
          </div>
          <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
            <div className="relative flex">
              <span className="absolute inset-y-0 flex items-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    ></path>
                  </svg>
                </button>
              </span>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Write your message!"
                className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
              />
              <div className="absolute right-0 items-center inset-y-0 flex">
                <button
                  onClick={sendData}
                  type="button"
                  className="inline-flex items-center justify-center rounded-md px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                >
                  <span className="font-bold">Send</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-6 w-6 ml-2 transform rotate-90"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    <NoLoggedIn />;
  }
}

export default ChatPage;
