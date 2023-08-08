/* app */
import './App.css'
import { useTodoList } from './facades/useTodoList'
import { useTodoForm } from './facades/useTodoForm'
import TodosUsecase from './usecases/TodosUsecase'
import TodosRepository from './repositories/TodosRepository'
import TodoListPresenter from './presenters/TodoListPresenter'
import { mockTodos } from './__mocks__/todos'



const provider = new TodosUsecase(
  new TodosRepository(
    // init value
    mockTodos
  ),
)



function App() {

  const form = useTodoForm(provider);
  const todos = useTodoList(provider);

  return (
    <>
      <TodoListPresenter mediator={{ form, todos }} />
    </>
  )
}

export default App
