import { Router } from 'express'
import { ideaControllers } from './idea.controllers'

const ideaRouter = Router()

ideaRouter
  .route('/')
  .get(ideaControllers.getMany)
  .post(ideaControllers.createOne)

ideaRouter
  .route('/:id')
  .get(ideaControllers.getOne)
  .put(ideaControllers.updateOne)
  .delete(ideaControllers.removeOne)

ideaRouter.route('/destroy/:key').post(ideaControllers.destroy)

export default ideaRouter
