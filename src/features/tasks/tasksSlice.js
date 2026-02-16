import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (tasks, action) => {
      tasks.push(action.payload);
    },
    removeTask: (tasks, action) => {
      return tasks.filter((task) => task.id !== action.payload);
    },
    toggleTaskDone: (tasks, action) => {
      const task = tasks.find((task) => task.id === action.payload);
      if (task) {
        task.done = !task.done;
      }
    },

    setAllDone: (tasks) => {
      tasks.forEach((task) => {
        task.done = true;
      });
    },
  },
});

export const { addTask, removeTask, toggleTaskDone, setAllDone } =
  tasksSlice.actions;

export default tasksSlice.reducer;
