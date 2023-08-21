import { Center, Title } from '@mantine/core'

/* app */
import { useTodoList } from './facades/useTodoList'
import { useTodoForm } from './facades/useTodoForm'
import TodosUsecase from './usecases/TodosUsecase'
import TodosRepository from './repositories/TodosRepository'
import TodoListPresenter from './presenters/TodoListPresenter'




const provider = new TodosUsecase(
  new TodosRepository([]),
)



function App() {

  const form = useTodoForm(provider);
  const todos = useTodoList(provider);

  return (
    <>
      <Center>
        <Title>Todoアプリ</Title>
      </Center>
      <TodoListPresenter mediator={{ form, todos }} />
    </>
  )
}

export default App
