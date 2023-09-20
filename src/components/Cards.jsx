import React from "react";
import EditModal from './EditModal'

const Cards = (taskData) => {
  const {
    title,
    priority,
    id,
    date,
    handleDeleteCard,
    handleUpdateCard,
    setIsEditModal,
    handleMoveRight,
    sortIndex,
    handleMoveLeft,
  } = taskData;


  return (
    <div className="bg-white rounded-lg p-4 mb-2 ">
      <div className="w-full flex justify-between flex-wrap sm:flex-nowrap md:flex-nowrap">
        <h2 className="text-black">{title}</h2>
        <div className="flex items-center text-slate-400">
          <span className="cursor-pointer mr-4" onClick={handleUpdateCard}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </span>
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
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex justify-between mt-10 align-middle flex-wrap sm:flex-nowrap md:flex-nowrap">
        <span className=" flex text-sm text-gray-400">
          Priority: {priority}
        </span>
        <div className="flex">
          <span className="mr-4 text-gray-400 text-sm">Due Date: {date}</span>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        {sortIndex > 0 && ( 
          <span onClick={() => handleMoveLeft(sortIndex)} className="text-xxl">
            ⬅️
          </span>
        )}
        <span onClick={() => handleMoveRight(sortIndex)} className="text-xxl">
          ➡️
        </span>
      </div>
    </div>
  );
};

export default Cards;
