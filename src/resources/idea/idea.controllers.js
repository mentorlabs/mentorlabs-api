import { BaseController } from '../../utils/BaseController'
import { Idea } from './idea.model'
// import { crudControllers } from '../../utils/crudControllers'

class IdeaControllers extends BaseController {
  // no constructor needed because default
  // https://stackoverflow.com/questions/45924326/standardjs-es6-extended-class-useless-constructor
  constructor(mongooseModel) {
    super(mongooseModel)
    this.mongooseModel = mongooseModel
  }

  getAll = async (req, res) => {
    try {
      const docs = await this.mongooseModel
        .find({})
        .lean()
        .exec()

      res.status(200).json({ data: docs })
    } catch (e) {
      res.status(400).json(e)
    }
  }
}

// export const ideaControllers = crudControllers(Idea)
//
const ideaControllers = new IdeaControllers(Idea)
export { ideaControllers }
