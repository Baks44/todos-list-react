import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import tasksReducer from "./features/tasks/tasksSlice";
import searchReducer from "./features/tasks/Search/searchSlice";
import { tasksSaga } from "./features/tasks/tasksSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(tasksSaga);
