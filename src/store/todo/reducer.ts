import { createReducer } from '@reduxjs/toolkit';
import { getTodoList, handleError, postTodoItem, setLoading } from './actions';
import { TodoState } from './types';

const initialState: TodoState = {
  pending: false,
  success: false,
  errorMessage: '',
  todoList: [],
};

export const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLoading, (state) => {
      state.pending = true;
      state.success = false;
      state.errorMessage = '';
    })
    .addCase(handleError, (state, { payload }) => {
      state.pending = false;
      state.errorMessage = payload;
    })
    .addCase(getTodoList.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.errorMessage = '';
      state.todoList = payload.data;
    })
    .addCase(postTodoItem.fulfilled, (state) => {
      state.pending = false;
      state.errorMessage = '';
    });
});

export default todoReducer;
