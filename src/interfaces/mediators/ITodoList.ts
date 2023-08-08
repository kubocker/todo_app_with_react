import { Todo } from "../../types/Todo";


export interface ITodoList {
  isSyncing?: boolean;
  isDeleting?: boolean;
  items: Todo[];
  onComplete: (todoId: string, isCompleted: boolean) => void;
  onDelete: (todoId: string) => void;
}
