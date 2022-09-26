import { createStyles, Input } from '@mantine/core';
import { useState, FormEventHandler, ChangeEventHandler } from 'react';
import useTodoStore from 'store';
import CheckButton from './CheckButton';

const useAddTodoStyles = createStyles(({ colors, colorScheme, radius, spacing, white }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: `${radius.md}px`,
    background: colorScheme === 'dark' ? colors.blue[2] : white,
    padding: `${spacing.md}px`,
    columnGap: `${spacing.md}px`,
  },
  inputWrapper: {
    flexGrow: 1,
  },
  input: {
    border: 'none',
    background: 'transparent',
    fontSize: '18px',
  },
  completed: {
    '&:hover': {
      background: 'transparent',
      stroke: 'red',
    },
  },
}));

const useAddTodo = () => {
  const addTodo = useTodoStore((s) => s.addTodo);
  const [name, setName] = useState<string>('');
  const [completed, setCompleted] = useState<boolean>(false);

  const handleCompleted = () => setCompleted((prev) => !prev);

  const handlerName: ChangeEventHandler<HTMLInputElement> = (evt) => setName(evt.target.value);

  const onSubmit: FormEventHandler = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    if (name) {
      addTodo({
        name,
        completed,
      });
    }
  };

  return { completed, onSubmit, handleCompleted, handlerName };
};

const AddTodo = () => {
  const { classes } = useAddTodoStyles();
  const { completed, onSubmit, handleCompleted, handlerName } = useAddTodo();

  return (
    <form className={classes.container} onSubmit={onSubmit}>
      <CheckButton status={completed} onClick={handleCompleted} />
      <Input
        classNames={{
          wrapper: classes.inputWrapper,
          input: classes.input,
        }}
        variant="unstyled"
        onChange={handlerName}
        placeholder="Create a new todo..."
      />
    </form>
  );
};

export default AddTodo;
