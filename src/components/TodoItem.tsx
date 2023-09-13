import { Card, Checkbox, Group, } from "@mantine/core";

/* app */
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
    <Card
      withBorder={true}
      shadow={'sm'}
      radius={'md'}
    >
      <Group position={'apart'}>
        <Checkbox
          label={item.title}
          checked={item.isCompleted}
          disabled={item.isCompleted}
          onChange={(event) => onComplete(item.todoId, event.target.checked)}
        />
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(item.todoId)}
        >
          削除
        </button>
      </Group>
    </Card>
  )
}

TodoItem.displayName = "TodoItem";
export default TodoItem;
