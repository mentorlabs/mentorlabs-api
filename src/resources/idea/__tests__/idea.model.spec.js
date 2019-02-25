import { Idea } from '../idea.model'

describe('Idea model', () => {
  describe('schema', () => {
    test('name', () => {
      const { name } = Idea.schema.obj
      expect(name).toEqual({
        type: String,
        required: [true, 'Name must be provided.'],
        trim: true
      })
    })

    test('description', () => {
      const { description } = Idea.schema.obj
      expect(description).toEqual({
        type: String,
        required: [true, 'Description must be provided.'],
        trim: true
      })
    })
  })
})
