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
    }
})

export const {addTask, moveTaskToColumn} = taskSlice.actions

export default taskSlice.reducer