/* app */
import { Observable } from "rxjs";
import TodosRepository from "../repositories/TodosRepository";
import { TodoListResponse, } from "../models/todos";
import { generateRandomString } from "../utils/computes";


export default class TodosUsecase {
  constructor(
    private todos: TodosRepository
  ) {}

  getAll (): Observable<TodoListResponse> {
    return new Observable(observer => {
      this.todos.getAll().subscribe({
        next: res => {
          observer.next(res)
        }
      })
    })
  }

  complete (todoId: string, isCompleted: boolean): Promise<void> {
    return new Promise((resolve) => {
      this.todos.update(
        todoId,
        isCompleted
      );
      resolve();
    })
  }

  add (title: string): Promise<void> {
    const todoId = generateRandomString();
    return new Promise((resolve) => {
      this.todos.add({
        title,
        todoId,
        isCompleted: false,
        createdAt: new Date()
      });
      resolve();
    })
  }

  delete (todoId: string): Promise<void> {
    return new Promise((resolve) => {
      this.todos.delete(todoId);
      resolve()
    })
  }
}