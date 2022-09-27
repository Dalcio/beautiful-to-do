import { ActionIcon, createStyles, Image, Text } from '@mantine/core';
import CheckButton from 'components/CheckButton';
import React from 'react';
import useTodoStore from 'store';
import { TTodo as TodoItemProps } from 'store/store.types';

const useTodoItemStyles = createStyles(({ spacing, colors, colorScheme }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    columnGap: `${spacing.lg}px`,
    padding: `${spacing.lg}px`,
    borderBottom: `1px solid  ${
      colorScheme === 'dark' ? colors.darkGrayishBlue[3] : colors.darkGrayishBlue[0]
    }`,

    '.close': {
      display: 'none',

      '&:hover': {
        background: 'transparent',
        opacity: 0.5,
      },
    },

    '&:hover': {
      '.close': {
        display: 'block',
      },
    },
  },
  name: {
    flexGrow: 1,
  },
  nameCompleted: {
    flexGrow: 1,
    color: colorScheme === 'dark' ? colors.darkGrayishBlue[3] : colors.darkGrayishBlue[0],
  },
}));

const TodoItem = ({ completed, name, id }: TodoItemProps) => {
  const { classes } = useTodoItemStyles();
  const toggleTodo = useTodoStore((s) => s.toggleTodo);
  const deleteTodo = useTodoStore((s) => s.deleteTodo);

  return (
    <li className={classes.container}>
      <CheckButton status={completed} onClick={() => toggleTodo(id)} />
      <Text className={classes[!completed ? 'name' : 'nameCompleted']} strikethrough={completed}>
        {name.substring(0, 28)}
        {name.length >= 28 && '....'}
      </Text>
      <ActionIcon className="close" onClick={() => deleteTodo(id)}>
        <Image src="/images/icon-cross.svg" />
      </ActionIcon>
    </li>
  );
};

export default TodoItem;
