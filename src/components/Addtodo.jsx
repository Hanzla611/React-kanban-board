import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../utils/taskSlice";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";


const Addtodo = () => {
  const dispatch = useDispatch();
  const taskData = useSelector((store) => store.task);
  const todoData = useSelector((store) => store.todo);
  const title = useRef();
  const priority = useRef();
  const date = useRef();
  const doneCount = taskData.filter((task) => task.column === 'Done').length;
  const pendingCount = taskData.filter((task) => task.column === 'Todo' || task.column === 'Ongoing').length;

  

  const handleButtonClick = () => {
    const todoTitle = title.current.value;
    const todoPriority = priority.current.value;
    const todoDate = date.current.value;

    if (!todoTitle || !todoPriority || !todoDate) {
      toast.error("Invalid input");
      return;
    }

    const todoPayload = {
      id: uuidv4(),
      title: todoTitle,
      priority: todoPriority,
      date: todoDate,
      column: 0,
      sortIndex:
        todoData[todoData.length + 1]?.sortIndex || todoData.length + 1,
    };
    toast.success("Added successfully");
    dispatch(addTask(todoPayload));
    title.current.value = "";
    priority.current.value = null;
    date.current.value = null;
  };

  return (
    <div className=" ml-6 mb-12 mt-8 flex flex-wrap">
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
        >
          Task name
        </label>
        <div className="flex flex-wrap">
          <input
            ref={title}
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 outline-blue-300 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/6 mr-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="title"
            required=""
          />
          <select
            ref={priority}
            name="priority"
            id="priority"
            className="outline-blue-300 mr-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
            placeholder="elect Priority"
          >
            <option defaultValue value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input
            ref={date}
            type="date"
            name="date"
            id="date"
            className="bg-gray-50 outline-blue-300 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue="2023-09-20" // Set your desired default date
            required=""
          />

          <button
            onClick={handleButtonClick}
            className="bg-blue-400 p-4 rounded-md ms-1 outline-blue-300 my-4 sm:my-0 md:my-0"
          >
            Add
          </button>
        </div>
      </div>
      <div className="py-4 flex flex-wrap">
      <h3 className="text-sm flex font-bold ml-8 mr-4">
        Total count: {taskData.length}
      </h3>
      <h3 className="text-sm flex font-bold ml-8 mr-4">
        Pending count: {pendingCount}
      </h3>
      <h3 className="text-sm flex font-bold ml-8 mr-4">Completed: {doneCount}</h3>
      </div>
     
    </div>
  );
};

export default Addtodo;
