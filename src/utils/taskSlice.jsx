import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload];
    },
    moveTaskToColumn: (state, action) => {
      const { taskId, newColumn } = action.payload;
      const task = state.find((t) => t.id === taskId);
      if (task) {
        task.column = newColumn;
      }
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { taskId, updatedTitle, updatedDate, updatedPriority } = action.payload;
      return state.map(task => 
        task.id === taskId
          ? { ...task, title: updatedTitle, date: updatedDate, priority: updatedPriority }
          : task
      );
    },
    moveCardRight: (state, action) => {
      const { id } = action.payload;
      const cardToMove = state.find((card) => card.id === id);
      if (cardToMove) {
        cardToMove.column++;
      }
    },
    moveCardLeft: (state, action) => {
      const { id } = action.payload;
      const cardToMove = state.find((card) => card.id === id);
      if (cardToMove) {
        cardToMove.column--;
      }
    },

  },
});

export const {
  addTask,
  moveTaskToColumn,
  removeTask,
  updateTask,
  moveCardRight,
  moveCardLeft,
} = taskSlice.actions;

export default taskSlice.reducer;
