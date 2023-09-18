import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "task",
    initialState: [],
    reducers:{
        addTask:(state, action) => {
            return [...state, action.payload]
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
          // moveCardLeft: (state, action) => {
          //   const { taskId } = action.payload;
          //   // Find the card in the state based on taskId
          //   const cardToMove = state.find((card) => card.id === taskId);
      
          //   // Check if the card exists and has a valid index
          //   if (cardToMove && cardToMove.sortIndex > 1) {
          //     // Decrease the sortIndex to move the card left
          //     cardToMove.sortIndex--;
          //   }
          // },
          // moveCardRight: (state, action) => {
          //   const { taskId } = action.payload;
          //   // Find the card in the state based on taskId
          //   const cardToMove = state.find((card) => card.id === taskId);
      
          //   // Check if the card exists
          //   if (cardToMove) {
          //     // Increase the sortIndex to move the card right
          //     cardToMove.sortIndex++;
          //   }
          // },
    }
})

export const {addTask, moveTaskToColumn, removeTask, moveCardRight, moveCardLeft} = taskSlice.actions

export default taskSlice.reducer