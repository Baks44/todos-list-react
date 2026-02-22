import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTask: (state, { payload: task }) => {
      state.tasks.push(task);
    },

    removeTask: (state, { payload: taskId }) => {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },

    toggleTaskDone: (state, { payload: taskId }) => {
      const task = state.tasks.find((task) => task.id === taskId);
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
