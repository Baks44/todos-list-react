import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    hideDone: false,
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },

    removeTask: (state, action) => {
      state.items = state.items.filter((task) => task.id !== action.payload);
    },

    toggleTaskDone: (state, action) => {
      const task = state.items.find((task) => task.id === action.payload);
      if (task) {
        task.done = !task.done;
      }
    },

    setAllDone: (state) => {
      state.items.forEach((task) => {
        task.done = true;
      });
    },
  },
});

export const { addTask, removeTask, toggleTaskDone, setAllDone } =
  tasksSlice.actions;

export default tasksSlice.reducer;
