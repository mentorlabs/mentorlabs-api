import { Router } from 'express'
import { ideaControllers } from './idea.controllers'

const ideaRouter = Router()

ideaRouter.get('/', ideaControllers.getMany)
ideaRouter.get('/:id', ideaControllers.getOne)

ideaRouter.post('/', ideaControllers.createOne)
ideaRouter.post('/destroy/:key', ideaControllers.destroy)

ideaRouter.put('/:id', ideaControllers.updateOne)

ideaRouter.delete('/:id', ideaControllers.removeOne)

export default ideaRouter
