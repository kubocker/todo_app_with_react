import { Space } from "@mantine/core";
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
        <div key={item.todoId}>
          <TodoItem
            item={item} 
            onComplete={handleComplete}
            onDelete={handleDelete}
          />
          <Space h={'xs'} />
        </div>
      ))}
    </ul>
  )
}

TodoList.displayName = "TodoList";
export default TodoList;
