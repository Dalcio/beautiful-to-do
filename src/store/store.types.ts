export type TTask = {
  completed: boolean;
  name: string;
  id: string;
};

export type TStoreState = {
  tasks: TTask[];
  filteredTasks: TTask[];
  itemsLeft: number;
};

export type TStoreActions = {
  addTask: (task: Omit<TTask, 'id'>) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  clearCompleted: () => void;
  //   moveTask: (task: TTask) => void;
};

export type TStore = TStoreState & TStoreActions;
