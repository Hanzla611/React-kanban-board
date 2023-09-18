import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";

function Header() {
  const username= useSelector((store)=>store.user);
  // console.log(username[0]['email']);

  const navigate = useNavigate();
  return (
    <div className="text-center bg-blue-400 text-white flex justify-center p-4 pt-8 items-center ">
      <div className="flex justify-between w-10/12">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Kanban-Board
        </a>
        <div className="text-2xl flex font-bold">
          <img
            className="w-8 h-8 mr-2"
            src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png"
            alt="user"
          />
          {/* {username.email} */}
          <img
            className="w-8 h-8 ml-12 cursor-pointer"
            onClick={()=>navigate('/')}
            src="https://cdn-icons-png.flaticon.com/128/9208/9208320.png"
            alt="user"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
