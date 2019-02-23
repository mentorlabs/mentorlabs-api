import { ideaControllers } from '../idea.controllers'
import { isFunction } from 'lodash'

describe('Idea controllers', () => {
  test('has crud controllers', () => {
    const crudMethods = [
      'getOne',
      'getMany',
      'createOne',
      'removeOne',
      'updateOne',
      'destroy'
    ]

    crudMethods.forEach(name =>
      expect(isFunction(ideaControllers[name])).toBe(true)
    )
  })
})
