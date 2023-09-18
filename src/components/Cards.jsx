import React from "react";

const Cards = (taskData) => {
  const {
    title,
    priority,
    id,
    date,
    handleDeleteCard,
    // handleMoveLeft,
    // handleMoveRight,
  } = taskData;

  return (
    <div className="bg-white rounded-lg p-4 mb-2">
      <div className="w-full flex justify-between">
        <h2 className="text-black">{title}</h2>
        <span className="cursor-pointer" onClick={handleDeleteCard}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
      <div className="flex justify-between mt-10 align-middle">
        <span className=" flex text-sm text-gray-400">
          Priority: {priority}
        </span>
        <div className="flex">
          <span className="mr-4 text-gray-400 text-sm">Due Date: {date}</span>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <span className="text-xxl" >
          ⬅️
        </span>
        <span className="text-xxl" >
          ➡️
        </span>
      </div>
    </div>
  );
};

export default Cards;
