import { BaseController } from '../../utils/BaseController'
import { Idea } from './idea.model'
import { crudControllers } from '../../utils/crudControllers'

class IdeaControllers extends BaseController {
  constructor(model) {
    super(model)
  }

  customIdeaMethod(req, res) {
    res.json({ message: 'hello from custom route' })
  }
}

export const ideaControllers = crudControllers(Idea)

// export const ideaControllers = new IdeaControllers(Idea)

// console.log(ideaControllers.getModel())
