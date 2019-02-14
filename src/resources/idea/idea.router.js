import { Router } from 'express'
import { ideaControllers } from './idea.controllers'

const ideaRouter = Router()

ideaRouter.post('/create', ideaControllers.createOne)

export default ideaRouter
