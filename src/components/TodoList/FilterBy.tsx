import { Button, createStyles } from '@mantine/core';
import React from 'react';
import useTodoStore from 'store';
import { Row } from 'theme/restyled';

const useFilterByStyles = createStyles(({ colors, colorScheme, radius, white }) => ({
  container: {
    borderRadius: `${radius.md}px`,
    background: colorScheme === 'dark' ? colors.blue[2] : white,
  },
  active: {
    color: colors.blue[0],
  },
  text: {
    color: colors.darkGrayishBlue[0],
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
