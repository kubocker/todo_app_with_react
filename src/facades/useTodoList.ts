import { useCallback, useEffect, useState } from "react";

/* app */
import { ITodoList } from "../interfaces/mediators/ITodoList";
import { Todo } from "../types/Todo";
import TodosUsecase from "../usecases/TodosUsecase";


export const useTodoList = (
  provider: TodosUsecase
): ITodoList => {

  const [items, setItems] = useState<Todo[]>([]);



  useEffect(() => {
    const loadData = provider.getAll().subscribe(res => {
      console.log(res);
      setItems(res)
    })
    return () => {
      if (loadData) {
        loadData.unsubscribe();
      }
    }

  }, []);


  const onComplete = useCallback((todoId: string, isCompleted: boolean) => {
    provider.complete(todoId, isCompleted);
  }, []);


  const onDelete = useCallback((todoId: string) => {
    provider.delete(todoId);
  }, []);




  return {
    items,
    onComplete,
    onDelete,
  }
}