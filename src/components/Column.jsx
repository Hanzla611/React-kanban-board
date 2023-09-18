import React from "react";

const ColumnBlock = ({ columnTitle, children }) => {
  return (
    <div className="w-1/4 m-2 bg-gray-100 h-full rounded-sm p-2">
      <h2 className="text-gray-500 mb-8 px-4 pt-3">{columnTitle} </h2>
     {children}
    </div>
  );
};

export default ColumnBlock;
