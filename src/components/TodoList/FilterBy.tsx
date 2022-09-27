import { Button, createStyles } from '@mantine/core';
import React from 'react';
import useTodoStore from 'store';
import { Row } from 'theme/restyled';

const useFilterByStyles = createStyles(({ colors, colorScheme, radius, white, fn }) => ({
  container: {
    [fn.smallerThan('md')]: {
      gridColumn: '1 / -1',
      gridRow: '2 / 3',
    },

    borderRadius: `${radius.md}px`,
    background: colorScheme === 'dark' ? colors.blue[2] : white,
    display: 'flex',
    justifyContent: 'center',
  },
  active: {
    color: `${colors.blue[0]}!important`,
    cursor: 'default',
  },
  text: {
    '&:hover': {
      color: colorScheme === 'dark' ? white : colors.darkGrayishBlue[1],
    },
  },
}));

const FilterBy = () => {
  const { classes } = useFilterByStyles();
  const filterTodoListBy = useTodoStore((s) => s.filterTodoListBy);
  const filterBy = useTodoStore((s) => s.filterBy);

  return (
    <Row className={classes.container} p="md">
      <Button
        className={classes[(filterBy === 'all' && 'active') || 'text']}
        onClick={() => filterTodoListBy('all')}
      >
        All
      </Button>
      <Button
        className={classes[(filterBy === 'active' && 'active') || 'text']}
        onClick={() => filterTodoListBy('active')}
      >
        Active
      </Button>
      <Button
        className={classes[(filterBy === 'complete' && 'active') || 'text']}
        onClick={() => filterTodoListBy('complete')}
      >
        Completed
      </Button>
    </Row>
  );
};

export default FilterBy;
