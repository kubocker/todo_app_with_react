import { Observable } from "rxjs";

/* app */
import { Todo } from "../../types/Todo";


export interface ITodos {
  getAll: () => Observable<Todo[]>
  add: (todo: Todo) => Promise<void>;
  update: (todoId: string, isCompleted: boolean) => Promise<void>;
  delete: (todoId: string) => Promise<void>;
}