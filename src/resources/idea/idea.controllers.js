import { BaseController } from '../../utils/BaseController'
import { Idea } from './idea.model'
// import { crudControllers } from '../../utils/crudControllers'

class IdeaControllers extends BaseController {
  // no constructor needed because default
  // https://stackoverflow.com/questions/45924326/standardjs-es6-extended-class-useless-constructor

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
