import { DragDropContextProps } from 'react-beautiful-dnd';
import useTodoStore from 'store';

export const useDragAndDrop = () => {
  const reorderTodoList = useTodoStore((s) => s.reorderTodoList);

  const onDragEnd: DragDropContextProps['onDragEnd'] = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) return;

    const sourceId = source.droppableId;
    const destinationId = destination.droppableId;

    if (sourceId === destinationId) {
      reorderTodoList(source.index, destination.index);
    }
  };

  return { onDragEnd };
};
