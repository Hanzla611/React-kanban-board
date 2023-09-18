import React, { useRef } from "react";
import { moveTaskToColumn, removeTask, moveCardLeft,moveCardRight  } from "../utils/taskSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Cards from "./Cards";
import ColumnBlock from "./Column";
import toast from "react-hot-toast";

const columns = {
  Backlog: "Backlog",
  Todo: "Todo",
  Ongoing: "Ongoing ",
  Done: "Done",
};

function ListData() {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.task);
  const columnMap = Object.keys(columns);
  const draggedTodoItem = useRef(null);

  const handleColumnDrop = (column) => {
    const draggedTodoId = draggedTodoItem.current;
    dispatch(moveTaskToColumn({ taskId: draggedTodoId, newColumn: column }));
  };
  const handleDeleteCard = (taskId) => {
    dispatch(removeTask(taskId));
    toast('Deleted successfully!',
  {
    icon: '👏',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
  };

  // const handleMoveLeft = (taskId) => {
  //   dispatch(moveCardLeft({ taskId }));
  // };

  // const handleMoveRight = (taskId) => {
  //   dispatch(moveCardRight({ taskId }));
  // };

  return (
    <div className="w-screen">
      <div className="flex">
        {columnMap.map((column, index) => (
          <>
            <ColumnBlock key={index} columnTitle={columns[column]}>
              <div
                className=" border-gray-300 max-h-screen w-full"
                style={{minHeight:"20vh"}}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleColumnDrop(column)}
              >
                {todos
                  .filter((todo) => todo.column === column)
                  .map((todo) => (
                    <>
                      <div
                        className=" m-2 bg-gray-100 h-full rounded-sm p-2"
                        key={todo.id}
                        draggable
                        onDragStart={(e) => (draggedTodoItem.current = todo.id)}
                        onDragOver={(e) => e.preventDefault()}
                      >

                        <Cards
                          key={todo.id}
                          id={todo.id}
                          title={todo.title}
                          date={todo.date}
                          priority={todo.priority}
                          handleDeleteCard={() => handleDeleteCard(todo.id)}
                          // handleMoveLeft={() => handleMoveLeft(todo.id)}
                          // handleMoveRight={() => handleMoveRight(todo.id)}
                        />
                      </div>
                    </>
                  ))}
              </div>
            </ColumnBlock>
          </>
        ))}
      </div>
    </div>
  );
}

export default ListData;
