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
  reorderTodoList() {},
};

export const storeActions: StateCreator<TStore, any, any, TStoreActions> = (set, get) => ({
  clearCompleted() {
    const { todoList, filterBy, filterTodoListBy } = get();

    const cleanedTasks = todoList.filter((task) => !task.completed);

    set({
      todoList: cleanedTasks,
      itemsLeft: cleanedTasks.length,
    });

    if (filterBy !== 'all') {
      filterTodoListBy(filterBy);
    }
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
    const { filterBy, filterTodoListBy, todoList } = get();
    const id = uuid();

    const itemsLeft = todoList.filter((t) => !t.completed).length;

    set((draft) => ({
      todoList: [
        ...draft.todoList,
        {
          ...task,
          id,
        },
      ],
      itemsLeft: itemsLeft + (task.completed ? 0 : 1),
    }));

    if (filterBy !== 'all') {
      filterTodoListBy(filterBy);
    }
  },
  toggleTodo(id) {
    const { todoList, filterBy, filterTodoListBy } = get();
    const tempTasks = [...todoList];
    const idx = tempTasks.findIndex((task) => task.id === id);

    tempTasks[idx].completed = !tempTasks[idx].completed;

    const itemsLeft = tempTasks.filter((task) => !task.completed).length;

    set({
      todoList: tempTasks,
      itemsLeft,
    });

    if (filterBy !== 'all') {
      filterTodoListBy(filterBy);
    }
  },
  filterTodoListBy(filterBy) {
    const { todoList } = get();

    const filteredTodoList =
      filterBy === 'all'
        ? undefined
        : todoList.filter((todo) => (filterBy === 'active' ? !todo.completed : todo.completed));

    set({
      filteredTodoList,
      filterBy,
    });
  },
  reorderTodoList(sourceIndex, destinationIndex) {
    const { todoList, filterTodoListBy, filterBy } = get();

    const tempTodoList = [...todoList];

    const [todo] = tempTodoList.splice(sourceIndex, 1);

    tempTodoList.splice(destinationIndex, 0, todo);

    set({ todoList: tempTodoList });

    if (filterBy !== 'all') {
      filterTodoListBy(filterBy);
    }
  },
});
