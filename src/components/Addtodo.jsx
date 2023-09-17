import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../utils/taskSlice";
import { v4 as uuidv4 } from "uuid";

const priorityOptions = ["Low", "Medium", "High"];

const Addtodo = () => {
  const dispatch = useDispatch();
  const taskData = useSelector((store) => store.task);
  const todoData = useSelector((store) => store.todo);
  const title = useRef();
  const stage = useRef();
  const priority = useRef();
  const date = useRef();

  const handleButtonClick = () => {
    const todoPayload = {
      id: uuidv4(),
      title: title.current.value,
      stage: stage.current.value,
      priority: priority.current.value,
      date: date.current.value,
      column: "Backlog",
      sortIndex:
        todoData[todoData.length + 1]?.sortIndex || todoData.length + 1,
    };
    dispatch(addTask(todoPayload));
  };

  return (
    <div className=" ml-6 mb-12 mt-8 flex ">
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
        >
          Task name
        </label>
        <div className="flex">
          <input
            ref={title}
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/6 mr-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="title"
            required=""
          />
          <input
            ref={stage}
            type="number"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-20 mr-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="stage"
            required=""
          />
          <select
            ref={priority}
            name="priority"
            id="priority"
            className="mr-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          >
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input
            ref={date}
            type="date"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Due date"
            required=""
          />
          <button
            onClick={handleButtonClick}
            className="bg-blue-400 p-4 rounded-md ms-1"
          >
            Add
          </button>
        </div>
      </div>
      <h3 className="text-sm flex font-bold ml-8 mr-4">
        Total count: {taskData.length}
      </h3>
      <h3 className="text-sm flex font-bold ml-8 mr-4">
        Pending count: {todoData.length}
      </h3>
      <h3 className="text-sm flex font-bold ml-8 mr-4">Completed: 0</h3>
    </div>
  );
};

export default Addtodo;
