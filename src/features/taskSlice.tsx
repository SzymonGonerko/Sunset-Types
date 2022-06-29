import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  textValueInput?: string
  isComplete?: boolean
  id?: string
  label?: string
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
      state.forEach(task => {
        if (task.id === action.payload) {
          task.isComplete = !task.isComplete
        }
      })},

      clearCompletedTasks: (state, action: PayloadAction<boolean>) => {
        return state.filter(task => 
          task.isComplete !== action.payload
        )
      },
       
  },


});

export const { addTask, removeTask, changeCheckedTask, clearCompletedTasks } = tasksSlice.actions;

export default tasksSlice.reducer;