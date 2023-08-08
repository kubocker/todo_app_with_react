import { BehaviorSubject, Observable, firstValueFrom, } from "rxjs";

/* app */
import { ITodos } from "../interfaces/repositories/ITodos";
import { Todo } from "../types/Todo";


export default class TodosRepository implements ITodos {

  private todos$: BehaviorSubject<Todo[]>;


  constructor (public todos: Todo[]) {
    this.todos$ = new BehaviorSubject<Todo[]>(todos);
  }


  getAll (): Observable<Todo[]> {
    return this.todos$.asObservable();
  }


  add (todo: Todo): Promise<void> {
    return new Promise(async (resolve) => {
       const todos = await firstValueFrom(this.todos$);
       this.todos$.next(todos.concat([todo]));
       setTimeout(() => {
         resolve();
       }, 500);
    })
  }


  update (
    todoId: string,
    isCompleted: boolean
  ): Promise<void> {
    return new Promise(async (resolve) => {
      const todos = await firstValueFrom(this.todos$);
      this.todos$.next(
        todos.map(res => {
          if (res.todoId === todoId) {
            return {
              ...res,
              isCompleted,
            }
          }
          return res;
        })
      )
      setTimeout(() => {
        resolve() ;
      }, 500);
    })
  }


  delete (todoId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const todos = await firstValueFrom(this.todos$);
        this.todos$.next(
          todos.filter(item => item.todoId !== todoId)
        )
        setTimeout(() => {
          resolve();
        }, 500);

      } catch (e) {
        reject();
      }
    })
  }
}