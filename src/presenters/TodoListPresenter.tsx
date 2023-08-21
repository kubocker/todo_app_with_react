/* app */
import { Container, Stack } from "@mantine/core";
import { ITodoForm } from "../interfaces/mediators/ITodoForm";
import { ITodoList } from "../interfaces/mediators/ITodoList";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";



interface TodoListPresenterProps {
  mediator: {
    form: ITodoForm;
    todos: ITodoList;
  }
}


const TodoListPresenter: React.FC<TodoListPresenterProps> = ({
  mediator: {
    form,
    todos,
  }
}) => {

  const handleAdd = (title: string) => {
    form.onAdd(title);
  }


  const handleComplete = (todoId: string, isCompleted: boolean) => {
    todos.onComplete(todoId, isCompleted);
  }


  const handleDelete = (todoId: string) => {
    todos.onDelete(todoId);
  }


  return (
    <Container size={800}>
      <Stack>
        <TodoForm
          onAdd={handleAdd}
        />
        <TodoList
          items={todos.items}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      </Stack>
    </Container>
  )
}

TodoListPresenter.displayName = "TodoListPresenter";
export default TodoListPresenter;
