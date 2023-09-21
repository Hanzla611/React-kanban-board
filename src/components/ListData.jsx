import React, { useRef, useState } from "react";
import {
  moveTaskToColumn,
  removeTask,
  updateTask,
  moveCardLeft,
  moveCardRight,
} from "../utils/taskSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Cards from "./Cards";
import ColumnBlock from "./Column";
import toast from "react-hot-toast";
import EditModal from "./EditModal";
// import { TrashIcon } from '@heroicons/react/outline';

const columns = {
  Backlog: "Backlog",
  Todo: "Todo",
  Ongoing: "Ongoing ",
  Done: "Done",
};

const columns2 = {
  Backlog: 0,
  Todo: 1,
  Ongoing: 2,
  Done: 3,
};

function ListData() {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.task);
  // const columnMap = Object.keys(columns);
  // console.log(columnMap, "map1");
  const columnMap2 = Object.keys(columns2);
  // console.log(columnMap2, "map2");

  const draggedTodoItem = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [editId, setEditId] = useState();
  const [isEditModal, setIsEditModal] = useState(false);

  const handleColumnDrop = (column) => {
    const draggedTodoId = draggedTodoItem.current;
    setIsDragging(false);
    dispatch(moveTaskToColumn({ taskId: draggedTodoId, newColumn: column }));
  };
  const handleDeleteCard = (taskId) => {
    dispatch(removeTask(taskId));
    setIsDragging(false);
    toast("Deleted successfully!", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const handleDragStart = (todoId) => {
    draggedTodoItem.current = todoId;
    setIsDragging(true);
  };
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDropOnBin = () => {
    const draggedTodoId = draggedTodoItem.current;
    setIsDragging(false);
    dispatch(removeTask(draggedTodoId));
    toast("Deleted successfully!", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const handleUpdateCard = (id) => {
    setEditId(id);
    setIsEditModal(true);
  };

  const handleMoveRight = (id) => {
    dispatch(moveCardRight(id));
  };
  const handleMoveLeft = (id) => {
    dispatch(moveCardLeft(id));
  };

  return (
    <div className={`w-screen ${isEditModal ? "block" : ""}`}>
      <div className="flex mx-auto mr-2">
        <div className="flex">
          {isEditModal && (
            <EditModal setIsEditModal={setIsEditModal} editId={editId} />
          )}
        </div>

        {columnMap2.map(
          (column, index) => (
            (
              <>
                <ColumnBlock key={index} columnTitle={columns[column]}>
                  <div
                    className=" border-gray-300 max-h-screen w-full"
                    style={{ minHeight: "20vh" }}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleColumnDrop(index)}
                  >
                    {todos
                      .filter((todo) => todo.column === index)
                      .map((todo) => (
                        <>
                          <div
                            className=" m-2 bg-gray-100 h-full rounded-sm p-2"
                            key={todo.id}
                            draggable
                            onDragStart={(e) => handleDragStart(todo.id)}
                            onDragEnd={handleDragEnd}
                            onDragOver={(e) => e.preventDefault()}
                          >
                            <Cards
                              key={todo.id}
                              id={todo.id}
                              title={todo.title}
                              date={todo.date}
                              priority={todo.priority}
                              handleDeleteCard={() => handleDeleteCard(todo.id)}
                              handleUpdateCard={() => handleUpdateCard(todo.id)}
                              setIsEditModal={setIsEditModal}
                              isEditModal={isEditModal}
                              sortIndex={todo.sortIndex}
                              handleMoveLeft={() => handleMoveLeft(todo)}
                              handleMoveRight={() => handleMoveRight(todo)}
                              columnNumber={todo.column}
                            />
                            <div className="flex flex-row justify-between items-center absolute z-10 text-center"></div>
                          </div>
                        </>
                      ))}
                  </div>
                </ColumnBlock>
              </>
            )
          )
        )}
      </div>

      {isDragging && (
        <div
          className="flex items-center justify-center m-2 bg-slate-50 z-10 h-60 rounded-sm p-2"
          onDrop={handleDropOnBin}
          onDragOver={(e) => e.preventDefault()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-24 h-24 text-red-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export default ListData;
