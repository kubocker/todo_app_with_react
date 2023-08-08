import { Todo } from "../types/Todo";

export const mockTodos: Todo[] = [
  {
    todoId: "1",
    title: "Buy groceries",
    isCompleted: false,
    createdAt: new Date("2023-07-31T12:00:00Z"),
  },
  {
    todoId: "2",
    title: "Read a book",
    isCompleted: false,
    createdAt: new Date("2023-07-31T14:30:00Z"),
  },
  {
    todoId: "3",
    title: "Go for a walk",
    isCompleted: true,
    createdAt: new Date("2023-07-31T16:15:00Z"),
  },
]
