import { Todo } from "../types/Todo";


export type TodoResponse = Todo;

export type TodoListResponse = TodoResponse[];

export type TodoRequest = Pick<Todo, 'title'>;
