import { Button, createStyles, Stack, Text } from '@mantine/core';
import useTodoStore from 'store';
import { Row } from 'theme/restyled';
import FilterBy from './FilterBy';
import TodoItem from './TodoItem';

const useTodoListStyles = createStyles(({ colors, colorScheme, white, radius, fn }) => ({
  container: {
    minHeight: '240px',
    height: '100%',
    overflow: 'hidden',
  },
  todoListContainer: {
    width: '100%',
    height: '100%',
    flexGrow: 1,
    borderRadius: `${radius.md}px`,
    background: colorScheme === 'dark' ? colors.blue[2] : white,
  },
  todoListWrapper: {
    flexGrow: 1,
    overflow: 'auto',
  },
  todoListFooter: {
    color: colorScheme === 'dark' ? colors.darkGrayishBlue[3] : colors.darkGrayishBlue[0],

    [fn.smallerThan('md')]: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gridTemplateRows: 'auto auto',
      background: colorScheme === 'dark' ? colors.blue[1] : colors.lightGrayishBlue[0],
      columnGap: 0,
      alignItems: 'flex-start',

      '& > .text-wrapper': {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        height: '56px',
        background: colorScheme === 'dark' ? colors.blue[2] : white,
        borderBottomLeftRadius: `${radius.md}px`,
      },
      '& > .button-wrapper': {
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        background: colorScheme === 'dark' ? colors.blue[2] : white,
        borderBottomRightRadius: `${radius.md}px`,
      },
    },

    button: {
      color: colorScheme === 'dark' ? colors.darkGrayishBlue[3] : colors.darkGrayishBlue[0],

      '&:hover': {
        color: colorScheme === 'dark' ? white : colors.darkGrayishBlue[1],
      },
    },
  },
}));

const TodoList = () => {
  const { classes } = useTodoListStyles();
  const todoList = useTodoStore((s) => s.todoList);
  const filteredTodoList = useTodoStore((s) => s.filteredTodoList);
  const itemsLeft = useTodoStore((s) => s.itemsLeft);
  const clearCompleted = useTodoStore((s) => s.clearCompleted);
  const filterBy = useTodoStore((s) => s.filterBy);

  return (
    <Stack className={classes.container} mb="md">
      <Stack className={classes.todoListContainer}>
        <div className={classes.todoListWrapper}>
          {filterBy !== 'all' && filteredTodoList && filteredTodoList.length >= 0
            ? filteredTodoList.map((todo) => <TodoItem {...todo} key={todo.id} />)
            : todoList.map((todo) => <TodoItem {...todo} key={todo.id} />)}
        </div>
        <Row
          className={classes.todoListFooter}
          align="center"
          justify="space-between" //p="lg"
        >
          <div className="text-wrapper">
            <Text px="lg">{itemsLeft} items left</Text>
          </div>
          <FilterBy />
          <div className="button-wrapper">
            <Button onClick={clearCompleted}>Clear Completed</Button>
          </div>
        </Row>
      </Stack>
    </Stack>
  );
};

export default TodoList;
