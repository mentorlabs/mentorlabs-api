import { Project } from '../project.model'
import mongoose from 'mongoose'

describe('Project model', () => {
  describe('schema', () => {
    test('name', () => {
      const { name } = Project.schema.obj
      expect(name).toEqual({
        type: String,
        required: true,
        trim: true,
        maxlength: 50
      })
    })

    test('notes', () => {
      const { notes } = Project.schema.obj
      expect(notes).toEqual(String)
    })

    test('approved', () => {
      const approved = Project.schema.obj
      expect(approved).toEqual(Boolean)
    })

    test('createdBy', () => {
      const { createdBy } = Project.schema.obj
      expect(createdBy).toEqual({
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
      })
    })
  })
})
