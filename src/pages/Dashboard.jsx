import React, { useEffect } from "react";
import Header from "../components/Header";
import Addtodo from "../components/Addtodo";
import { useDispatch } from "react-redux";
import ListData from "../components/ListData";
import {Toaster } from "react-hot-toast";
import { addUser } from "../utils/userSlice";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(addUser(localStorage.getItem('userData')))
  },[])
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <div>
        <Addtodo />
      </div>
      <div className="flex ms-4">
        <ListData />
      </div>
    </>
  );
}

export default Dashboard;
