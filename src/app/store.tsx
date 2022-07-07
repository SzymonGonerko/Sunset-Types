import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/taskSlice";
import operationsReducer from "../features/operationsSlice"


export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    operations: operationsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;