
/* app */
import './App.css';
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
      <div className="navbar bg-base-100">
        <div className="navbar-start">
        </div>
        <div className="navbar-center navbar bg-neutral text-neutral-content">
          <a className="btn btn-ghost normal-case text-xl">Todo</a>
        </div>
        <div className="navbar-end">
        </div>
      </div>
      <TodoListPresenter mediator={{ form, todos }} />
    </>
  )
}

export default App
