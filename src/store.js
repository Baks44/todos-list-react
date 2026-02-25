import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from ".//features/tasks/tasksSlice";
import searchReducer from "./features/tasks/Search/searchSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    search: searchReducer,
  },
});
