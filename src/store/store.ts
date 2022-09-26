import { v4 as uuid } from 'uuid';
import { StateCreator } from 'zustand';
import { TStore, TStoreActions } from './store.types';

export const storeInit: TStore = {
  tasks: [],
  filteredTasks: [],
  itemsLeft: 0,
  clearCompleted() {},
  deleteTask() {},
  addTask() {},
  toggleTask() {},
};

export const storeActions: StateCreator<TStore, any, any, TStoreActions> = (set, get) => ({
  clearCompleted() {
    const { tasks } = get();

    const cleanedTasks = tasks.filter((task) => !task.completed);

    // maybe add filter tasks

    set({
      tasks: cleanedTasks,
      itemsLeft: cleanedTasks.length,
    });
  },
  deleteTask(id) {
    const { tasks } = get();
    const tempTasks = tasks.filter((task) => task.id !== id);

    const itemsLeft = tempTasks.filter((task) => !task.completed).length;

    set({
      tasks: tempTasks,
      itemsLeft,
    });
  },
  addTask(task) {
    const id = uuid();

    set((draft) => ({
      tasks: [
        ...draft.tasks,
        {
          ...task,
          id,
        },
      ],
    }));
  },
  toggleTask(id) {
    const { tasks } = get();
    const tempTasks = [...tasks];
    const idx = tempTasks.findIndex((task) => task.id === id);

    tempTasks[idx].completed = !tempTasks[idx].completed;

    const itemsLeft = tempTasks.filter((task) => !task.completed).length;

    set({
      tasks: tempTasks,
      itemsLeft,
    });
  },
});
