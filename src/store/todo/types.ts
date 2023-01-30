export enum ActionTypes {
  SET_LOADING = 'set-loading',
  HANDLE_ERROR = 'handle-error',
  GET_TODO_LIST = 'get-todo-list',
  POST_TODO_ITEM = 'post-todo-item',
  PUT_TODO_STATUS = 'put-todo-status',
  DELETE_TODO_ITEM = 'delete-todo-item',
}

export type TTodoItem = {
  id: number;
  title: string;
  status: string;
};

export interface TodoState {
  pending: boolean;
  errorMessage: string;
  success: boolean;
  todoList: Array<TTodoItem>;
}
