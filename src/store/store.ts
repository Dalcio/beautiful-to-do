import { v4 as uuid } from 'uuid';
import { StateCreator } from 'zustand';
import { TStore, TStoreActions } from './store.types';

export const storeInit: TStore = {
  todoList: [],
  filteredTodoList: [],
  itemsLeft: 0,
  filterBy: 'all',
  clearCompleted() {},
  deleteTodo() {},
  addTodo() {},
  toggleTodo() {},
  filterTodoListBy() {},
};

export const storeActions: StateCreator<TStore, any, any, TStoreActions> = (set, get) => ({
  clearCompleted() {
    const { todoList } = get();

    const cleanedTasks = todoList.filter((task) => !task.completed);

    // maybe add filter todoList

    set({
      todoList: cleanedTasks,
      itemsLeft: cleanedTasks.length,
    });
  },
  deleteTodo(id) {
    const { todoList } = get();
    const tempTasks = todoList.filter((task) => task.id !== id);

    const itemsLeft = tempTasks.filter((task) => !task.completed).length;

    set({
      todoList: tempTasks,
      itemsLeft,
    });
  },
  addTodo(task) {
    const id = uuid();

    set((draft) => ({
      todoList: [
        ...draft.todoList,
        {
          ...task,
          id,
        },
      ],
    }));
  },
  toggleTodo(id) {
    const { todoList } = get();
    const tempTasks = [...todoList];
    const idx = tempTasks.findIndex((task) => task.id === id);

    tempTasks[idx].completed = !tempTasks[idx].completed;

    const itemsLeft = tempTasks.filter((task) => !task.completed).length;

    set({
      todoList: tempTasks,
      itemsLeft,
    });
  },
  filterTodoListBy(filterBy) {
    const { todoList } = get();

    const filteredTodoList =
      filterBy === 'all'
        ? []
        : todoList.filter((todo) => (filterBy === 'active' ? !todo.completed : todo.completed));

    set({
      filteredTodoList,
      filterBy,
    });
  },
});
