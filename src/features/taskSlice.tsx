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
    addTasks: (state, action: PayloadAction<{isComplete: boolean, id: string, label: string}>) => {
      state.push(action.payload);
    },

  },
});

export const { addTasks } = tasksSlice.actions;

export default tasksSlice.reducer;