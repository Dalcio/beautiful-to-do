import { createStyles, Stack } from '@mantine/core';
import React from 'react';
import useTodoStore from 'store';
import FilterBy from './FilterBy';
import TodoItem from './TodoItem';

const useTodoListStyles = createStyles(({ colors, colorScheme, white, radius }) => ({
  container: {
    minHeight: '240px',
    height: '100%',
    overflow: 'auto',
  },
  todoListWrapper: {
    width: '100%',
    height: '100%',
    borderRadius: `${radius.md}px`,
    background: colorScheme === 'dark' ? colors.blue[2] : white,
  },
}));

const TodoList = () => {
  const { classes } = useTodoListStyles();
  const todoList = useTodoStore((s) => s.todoList);
  const filteredTasks = useTodoStore((s) => s.filteredTodoList);

  return (
    <Stack className={classes.container} mb="md">
      <Stack className={classes.todoListWrapper}>
        {filteredTasks.length > 0
          ? filteredTasks.map((todo) => <TodoItem {...todo} key={todo.id} />)
          : todoList.map((todo) => <TodoItem {...todo} key={todo.id} />)}
      </Stack>
      <FilterBy />
    </Stack>
  );
};

export default TodoList;
