import React from 'react';
import { TTodoItem } from '../../store/todo';
import TodoItem from '../TodoItem';
import styles from './TodoList.module.scss';

type TTodoListProps = {
  data: Array<TTodoItem>;
};

const TodoList: React.FC<TTodoListProps> = ({ data }) => {
  return (
    <div className={styles.wrap} data-testid='todolist'>
      {data.length > 0 ? (
        data.map((todo: TTodoItem, i: number) => (
          <TodoItem key={i} item={todo} />
        ))
      ) : (
        <div className={styles.no__data}>
          You have not created any tasks yet.
        </div>
      )}
    </div>
  );
};

export default TodoList;
