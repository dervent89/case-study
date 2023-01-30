import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { deleteTodoItem, putTodoStatus, TTodoItem } from '../../store/todo';
import { CheckIcon, TrashIcon } from '../SvgIcon';
import styles from './TodoItem.module.scss';

type TodoItemProps = {
  item: TTodoItem;
};

const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const deleteTask = (e: number) => {
    const result = window.confirm('Are you the boss?');
    result && dispatch(deleteTodoItem(e));
  };
  const changeTaskStatus = (e: number) => {
    dispatch(putTodoStatus(e));
  };

  return (
    <div className={styles.item}>
      <label>
        <input
          type='checkbox'
          checked={item.status === '1'}
          onChange={() => changeTaskStatus(item.id)}
        />
        <em>
          <CheckIcon />
        </em>
        <span>{item.title}</span>
      </label>
      <button onClick={() => deleteTask(item.id)}>
        <TrashIcon />
      </button>
    </div>
  );
};

export default TodoItem;
