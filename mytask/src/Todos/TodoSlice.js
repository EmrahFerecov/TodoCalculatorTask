import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: state.todos.length + 1,
        text: action.payload,
        completed: false,
      });
    },
 
  },
});

export const { addTodo } = TodosSlice.actions;
export default TodosSlice.reducer;