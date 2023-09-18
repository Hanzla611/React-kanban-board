import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo-task",
  initialState: [],
  reducers: {
    addTodoTask: (state, action) => {
      return [...state, action.payload];
    },
    removeTodoTask: (state, action) => {
      // Remove the task from the todo state based on action payload
      const taskIdToRemove = action.payload.id;
      return state.filter((task) => task.id !== taskIdToRemove);
    },
  },
});

export const { addTodoTask, removeTodoTask } = todoSlice.actions;

export default todoSlice.reducer;
