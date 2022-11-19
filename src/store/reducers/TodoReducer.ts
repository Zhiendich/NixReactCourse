import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ToDoItemList, ToDoItemProps } from "../../types/ToDoItemsList";

const initialState = {
  todos: ToDoItemList,
};
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ToDoItemProps>) => {
      state.todos.unshift(action.payload);
    },
    removeToDo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    changeToDo: (state, action: PayloadAction<ToDoItemProps>) => {
      const findIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[findIndex] = action.payload;
    },
  },
});

export const { addTodo, removeToDo, changeToDo } = todoSlice.actions;

export default todoSlice.reducer;
