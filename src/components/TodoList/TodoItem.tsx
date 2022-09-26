import { ActionIcon, createStyles, Image, Text } from '@mantine/core';
import React from 'react';
import useTodoStore from 'store';
import { TTodo as TodoItemProps } from 'store/store.types';

const useTodoItemStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
  },
}));

const TodoItem = ({ completed, name, id }: TodoItemProps) => {
  const { classes } = useTodoItemStyles();
  const toggleTodo = useTodoStore((s) => s.toggleTodo);
  const deleteTodo = useTodoStore((s) => s.deleteTodo);

  return (
    <li className={classes.container}>
      <ActionIcon onClick={() => toggleTodo(id)}>{completed ? 'done' : 'todo'}</ActionIcon>
      <Text>{name}</Text>
      <ActionIcon onClick={() => deleteTodo(id)}>
        <Image src="/images/" />
      </ActionIcon>
    </li>
  );
};

export default TodoItem;
