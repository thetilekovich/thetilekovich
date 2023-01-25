import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NoLoggedIn from "../../NoLoggedIn";

function AllChatsPage() {
  const {status} = useSelector(state => state.userData)
  if(status){
   return (
    <section className="relative flex justify-center flex-col px-8 py-16 bg-blueGray-50 ">
      <div className="width-full mb-12 px-4">
        <div
          className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg
  bg-pink-900 text-white"
        >
          <div className="block w-full overflow-x-auto ">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                    Groups
                  </th>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700"></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <Link to='/chat/ourgroup'>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <span className="ml-3 font-bold text-white">
                        Our Group
                      </span>
                    </th>
                  </Link>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  ); 
  }
  else{
    return (
     <NoLoggedIn/>
    )
  }
  
}

export default AllChatsPage;
