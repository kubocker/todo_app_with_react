import { Button, Card, Checkbox, Group, } from "@mantine/core";

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
          onChange={(event) => {
            console.log(event.target.checked)
            onComplete(item.todoId, event.target.checked)
          }}
        />
        <Button onClick={() => onDelete(item.todoId)}>削除</Button>
      </Group>
    </Card>
  )
}

TodoItem.displayName = "TodoItem";
export default TodoItem;
