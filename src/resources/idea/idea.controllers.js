import { BaseController } from '../../utils/BaseController'
import { Idea } from './idea.model'
import { crudControllers } from '../../utils/crudControllers'

class IdeaControllers extends BaseController {
  constructor(mongooseModel) {
    super(mongooseModel)
  }

  customIdeaMethod(req, res) {
    res.json({ message: 'hello from custom route' })
  }
}

// export const ideaControllers = crudControllers(Idea)
//
const ideaControllers = new IdeaControllers(Idea)
console.log('in this file')
export { ideaControllers }

console.log(ideaControllers.getModel())
