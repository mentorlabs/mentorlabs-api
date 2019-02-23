import { Idea } from '../idea.model'

describe('Project model', () => {
  describe('schema', () => {
    test('name', () => {
      const { name } = Idea.schema.obj
      expect(name).toEqual({
        type: String,
        required: true,
        trim: true
      })
    })

    test('description', () => {
      const { description } = Idea.schema.obj
      expect(description).toEqual({
        type: String,
        required: true,
        trim: true
      })
    })
  })
})
