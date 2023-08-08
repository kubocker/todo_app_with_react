import { TodoListResponse } from "../models/todos";
import TodoItem from "./TodoItem";


interface TodoListProps {
  items: TodoListResponse;
  onComplete: (todoId: string, isCompleted: boolean) => void;
  onDelete: (todoId: string) => void;
}


const TodoList: React.FC<TodoListProps> = ({
  items,
  onComplete,
  onDelete,
}) => {

  const handleComplete = (todoId: string, isCompleted: boolean) =>
    onComplete(todoId, isCompleted);

  const handleDelete = (todoId: string) => onDelete(todoId);


  return (
    <ul>
      {items.map(item => (
        <TodoItem
          key={item.todoId}
          item={item} 
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  )
}

TodoList.displayName = "TodoList";
export default TodoList;
