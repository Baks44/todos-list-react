import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    toggleTaskDone: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.done = !task.done;
      }
    },

    setAllDone: (state) => {
      state.tasks.forEach((task) => {
        task.done = true;
      });
    },

    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
  },
});

export const {
  addTask,
  removeTask,
  toggleTaskDone,
  setAllDone,
  toggleHideDone,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;
export const selectTasks = (state) => state.tasks.tasks;
export const selectHideDone = (state) => state.tasks.hideDone;

export default tasksSlice.reducer;
