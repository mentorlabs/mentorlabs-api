import _ from 'lodash'

export class BaseController {
  constructor(mongooseModel) {
    this.mongooseModel = mongooseModel
  }

  createOne = async (req, res) => {
    let createdBy
    _.isNil(req.user) ? (createdBy = 'default') : (createdBy = req.user._id)

    try {
      console.log(req.body)
      const doc = await this.mongooseModel.create({ ...req.body, createdBy })
      res.status(201).json({ data: doc })
    } catch (e) {
      console.error(e)
      res.status(400).json({ error: e })
    }
  }

  getOne = async (req, res) => {
    try {
      const doc = await this.mongooseModel
        .findOne({ createdBy: req.user._id, _id: req.params.id })
        .lean()
        .exec()

      if (!doc) {
        return res.status(400).end()
      }

      res.status(200).json({ data: doc })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  }

  getMany = async (req, res) => {
    try {
      const docs = await this.mongooseModel
        .find({ createdBy: req.user._id })
        .lean()
        .exec()

      res.status(200).json({ data: docs })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  }

  updateOne = async (req, res) => {
    try {
      const updatedDoc = await this.mongooseModel
        .findOneAndUpdate(
          {
            createdBy: req.user._id,
            _id: req.params.id
          },
          req.body,
          { new: true }
        )
        .lean()
        .exec()

      if (!updatedDoc) {
        return res.status(400).end()
      }

      res.status(200).json({ data: updatedDoc })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  }

  removeOne = async (req, res) => {
    try {
      const removed = await this.mongooseModel.findOneAndRemove({
        createdBy: req.user._id,
        _id: req.params.id
      })

      if (!removed) {
        return res.status(400).end()
      }

      return res.status(200).json({ data: removed })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  }

  getModel = async () => {
    console.log('model: ', this.mongooseModel)
  }

  destroy = async (req, res) => {}
}
