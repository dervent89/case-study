import { RootState } from '../index';
import { createSelector } from '@reduxjs/toolkit';

export const selectTodo = (state: RootState) => state.todo;

export const todoSelector = createSelector(selectTodo, (state) => state);
