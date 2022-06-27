import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  isComplete: boolean
  id: string
  label: string
}

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [] as Task[],
  reducers: {

    addTask: (state, action: PayloadAction<{isComplete: boolean, id: string, label: string}>) => {
      state.push(action.payload);
    },

    removeTask: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },

    changeCheckedTask: (state, action: PayloadAction<string>) => {
      state.map(task => {
        if (task.id === action.payload) {
          task.isComplete = !task.isComplete
        }
      })},




  },


});

export const { addTask, removeTask, changeCheckedTask } = tasksSlice.actions;

export default tasksSlice.reducer;