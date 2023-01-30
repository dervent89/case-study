import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

const setup = () => {
  const utils = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const taskInput = utils.getByPlaceholderText('New task');
  const addBtn = utils.getByTestId('addBtn');
  const todolist = utils.getByTestId('todolist');
  const page = utils.getByTestId('page');
  return {
    page,
    taskInput,
    addBtn,
    todolist,
    ...utils,
  };
};

describe('deneme', () => {
  it('should render new task input', () => {
    const { taskInput } = setup();
    expect(taskInput).toBeInTheDocument();
  });

  it('should render add button', () => {
    const { addBtn } = setup();
    expect(addBtn).toBeInTheDocument();
  });

  it('should disabled add button', () => {
    const { addBtn } = setup();
    expect(addBtn).toBeDisabled();
  });

  it('test', () => {
    const { taskInput } = setup();
    fireEvent.change(taskInput, { target: { value: 'Good Day' } });
    expect(taskInput).toHaveValue('Good Day');
  });
  it('test2', () => {
    const { taskInput, addBtn, page } = setup();
    fireEvent.click(addBtn);
    expect(page).toHaveClass('loading');
    expect(taskInput).toHaveValue('');
  });
});
