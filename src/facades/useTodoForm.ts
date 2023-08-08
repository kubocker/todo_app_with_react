import { useCallback } from "react";

/* app */
import { ITodoForm } from "../interfaces/mediators/ITodoForm";
import TodosUsecase from "../usecases/TodosUsecase";


export const useTodoForm = (
  provider: TodosUsecase
): ITodoForm => {

  const onAdd = useCallback((title: string) => {
    provider.add(title);
  }, []);


  return {
    onAdd,
  }
}