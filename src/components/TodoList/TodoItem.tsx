import { ActionIcon, createStyles, Image, Text } from '@mantine/core';
import CheckButton from 'components/CheckButton';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import useTodoStore from 'store';
import { TTodo } from 'store/store.types';

type TodoItemProps = {
  index: number;
} & TTodo;

const useTodoItemStyles = createStyles(({ spacing, colors, colorScheme }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
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

const TodoItem = ({ completed, name, id, index }: TodoItemProps) => {
  const { classes } = useTodoItemStyles();
  const toggleTodo = useTodoStore((s) => s.toggleTodo);
  const deleteTodo = useTodoStore((s) => s.deleteTodo);

  return (
    <Draggable draggableId={id} index={index}>
      {(providedDraggable) => (
        <li
          className={classes.container}
          ref={providedDraggable.innerRef}
          {...providedDraggable.dragHandleProps}
          {...providedDraggable.draggableProps}
        >
          <CheckButton status={completed} onClick={() => toggleTodo(id)} />
          <Text
            className={classes[!completed ? 'name' : 'nameCompleted']}
            strikethrough={completed}
          >
            {name.substring(0, 28)}
            {name.length >= 28 && '....'}
          </Text>
          <ActionIcon className="close" onClick={() => deleteTodo(id)}>
            <Image src="/images/icon-cross.svg" />
          </ActionIcon>
        </li>
      )}
    </Draggable>
  );
};

export default TodoItem;
