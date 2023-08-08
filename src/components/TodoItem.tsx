import { Button, Card, Checkbox, Group, } from "@mantine/core";

/* app */
import styles from './TodoItem.module.css';
import { TodoResponse } from "../models/todos";


interface TodoItemProps {
  item: TodoResponse;
  onComplete: (todoId: string, isCompleted: boolean) => void;
  onDelete: (todoId: string) => void;
}


const TodoItem: React.FC<TodoItemProps> = ({
  item,
  onComplete,
  onDelete
}) => {
  return (
    <Card>
      <Group>
        <Checkbox
          onChange={(event) => onComplete(item.todoId, event.target.checked)}
        />
        <label className={item.isCompleted ? `${styles.todo__label} ${styles.completed}` : styles.todo__label}>
          {item.title}
        </label>
        <Button onClick={() => onDelete(item.todoId)}>削除</Button>
      </Group>
    </Card>
  )
}

TodoItem.displayName = "TodoItem";
export default TodoItem;
