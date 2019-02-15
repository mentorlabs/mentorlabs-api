import { Router } from 'express'
import { ideaControllers } from './idea.controllers'

const ideaRouter = Router()

ideaRouter.get('/', ideaControllers.getAll)
ideaRouter.post('/', ideaControllers.createOne)
ideaRouter.put('/update/:id', ideaControllers.updateOne)
ideaRouter.put('/destoy', ideaControllers.destroy)

export default ideaRouter
