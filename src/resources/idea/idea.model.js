import mongoose from 'mongoose'

const { Schema } = mongoose

const ideaSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Name must be provided.']
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Description must be provided.']
  }
})

export const Idea = mongoose.model('idea', ideaSchema)
