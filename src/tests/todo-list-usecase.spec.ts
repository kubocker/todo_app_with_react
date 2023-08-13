import { describe, expect, it, } from 'vitest';

/* app */
import { mockTodos } from '../__mocks__/todos';
import TodosUsecase from '../usecases/TodosUsecase';
import TestTodosRepository from './repositories/TestTodosRepository';
import { firstValueFrom } from 'rxjs';


describe("Todo一覧", () => {

  const usecase = new TodosUsecase(
    new TestTodosRepository(mockTodos),
  )

  /**
   * Todo一覧
   * 全取得
   */
  describe("全取得 getAll関数", async () => {

    const res = await firstValueFrom(usecase.getAll());

    it("to have all properties in each Todo", async () => {
      res.forEach(item => {
        expect(item).toHaveProperty('todoId');
        expect(item).toHaveProperty('title');
        expect(item).toHaveProperty('isCompleted');
        expect(item).toHaveProperty('createdAt');
      })
    })
  })

});
