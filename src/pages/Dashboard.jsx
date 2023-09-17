import React from "react";
import Header from "../components/Header";
import Addtodo from "../components/Addtodo";
import { useDispatch, useSelector } from "react-redux";
import ListData from "../components/ListData";

function Dashboard() {
  return (
    <>
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
