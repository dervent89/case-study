import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ActionTypes } from './types';

export const setLoading = createAction(ActionTypes.SET_LOADING);
export const handleError = createAction<string>(ActionTypes.HANDLE_ERROR);

export const getTodoList = createAsyncThunk(
  ActionTypes.GET_TODO_LIST,
  async (undefined, { dispatch }) => {
    dispatch(setLoading());
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/TodoList.php`
      );
      return response.data;
    } catch (error: any) {
      throw dispatch(handleError(error));
    }
  }
);

export const postTodoItem = createAsyncThunk(
  ActionTypes.POST_TODO_ITEM,
  async (task: string, { dispatch }) => {
    dispatch(setLoading());
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/TodoList.php`,
        { title: task }
      );
      dispatch(getTodoList());
      return response.data;
    } catch (error: any) {
      throw dispatch(handleError(error));
    }
  }
);

export const putTodoStatus = createAsyncThunk(
  ActionTypes.PUT_TODO_STATUS,
  async (id: number, { dispatch }) => {
    dispatch(setLoading());
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/TodoList.php?id=${id}`
      );
      dispatch(getTodoList());
      return response.data;
    } catch (error: any) {
      throw dispatch(handleError(error));
    }
  }
);

export const deleteTodoItem = createAsyncThunk(
  ActionTypes.DELETE_TODO_ITEM,
  async (id: number, { dispatch }) => {
    dispatch(setLoading());
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/TodoList.php?id=${id}`
      );
      dispatch(getTodoList());
      return response.data;
    } catch (error: any) {
      throw dispatch(handleError(error));
    }
  }
);
