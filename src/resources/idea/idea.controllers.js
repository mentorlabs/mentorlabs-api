import { Idea } from './idea.model'
import { PublicBaseController } from '../../utils/PublicBaseController'

class IdeaControllers extends PublicBaseController {
  // no constructor needed because default
  // https://stackoverflow.com/questions/45924326/standardjs-es6-extended-class-useless-constructor
  constructor(mongooseModel) {
    super(mongooseModel)
    this.mongooseModel = mongooseModel
  }

  // add custom methods if needed
}

const ideaControllers = new IdeaControllers(Idea)

export { ideaControllers }
