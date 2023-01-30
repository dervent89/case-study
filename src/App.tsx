import React, { useEffect } from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getTodoList, todoSelector } from './store/todo';

function App() {
  const dispatch = useAppDispatch();
  const { pending, todoList } = useAppSelector(todoSelector);

  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  return (
    <div className='container'>
      <div className={`${pending ? 'loading' : ''} page`} data-testid='page'>
        <h1 className='page__title'>ToDo List</h1>
        <CreateTodo />
        <TodoList data={todoList} />
      </div>
    </div>
  );
}

export default App;
