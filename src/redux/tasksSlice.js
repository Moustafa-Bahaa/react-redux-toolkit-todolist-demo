import { createSlice } from "@reduxjs/toolkit";
export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasksList: [],
  },
  reducers: {
    addTask: function (state, action) {
      state.tasksList.push(action.payload);
    },
    deleteTask: function (state, action) {
      state.tasksList = state.tasksList.filter(
        (task) => task.id != action.payload.id
      );
    },
  },
});
export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
