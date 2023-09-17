import React, { useRef } from "react";
// import "../App.css";
import { moveTaskToColumn } from "../utils/taskSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Cards from "./Cards";
import ColumnBlock from "./Column";

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
  return (
    <div className="w-screen">
      <div className="flex">
        {columnMap.map((column, index) => (
          <>
            <ColumnBlock key={index} columnTitle={columns[column]}>
              <div
                className=" border-gray-300 max-h-screen w-ful"
                style={{minHeight:"20vh"}}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleColumnDrop(column)}
              >
                {todos
                  .filter((todo) => todo.column === column)
                  .map((todo) => (
                    <>
                      {console.log(todo, "todo")}
                      <div
                        className=" m-2 bg-gray-100 h-full rounded-sm p-2"
                        key={todo.id}
                        draggable
                        onDragStart={(e) => (draggedTodoItem.current = todo.id)}
                        onDragOver={(e) => e.preventDefault()}
                      >
                        {/* <i className="fa-solid fa-bars"></i>
                    <h3>{todo.title}</h3> */}

                        <Cards
                          key={todo.id}
                          title={todo.title}
                          date={todo.date}
                          priority={todo.priority}
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
