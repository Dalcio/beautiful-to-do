export type TFilterBy = 'all' | 'active' | 'complete';

export type TTodo = {
  completed: boolean;
  name: string;
  id: string;
};

export type TStoreState = {
  todoList: TTodo[];
  filteredTodoList: TTodo[];
  itemsLeft: number;
  filterBy: TFilterBy;
};

export type TStoreActions = {
  addTodo: (todo: Omit<TTodo, 'id'>) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  clearCompleted: () => void;
  filterTodoListBy: (filterBy: TFilterBy) => void;
  // moveTodo: () => void;
  reorderTodoList: (sourceIndex: number, destinationIndex: number) => void;
};

export type TStore = TStoreState & TStoreActions;
