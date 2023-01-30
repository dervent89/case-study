import React, { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { postTodoItem } from '../../store/todo';
import styles from './CreateTodo.module.scss';

const CreateTodo: React.FC = () => {
  const dispatch = useAppDispatch();
  const [task, setTask] = useState<string>('');

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(postTodoItem(task)).then(() => {
      setTask('');
    });
  };

  return (
    <form onSubmit={formHandler} className={styles.form}>
      <input
        type='text'
        placeholder='New task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type='submit' data-testid='addBtn' disabled={task.length < 2}>
        Add
      </button>
    </form>
  );
};

export default CreateTodo;
