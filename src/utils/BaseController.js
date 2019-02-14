import _ from 'lodash'

export class BaseController {
  constructor(model) {
    console.log('initiation base class')
    this.model = model
  }

  async getOne(req, res) {
    try {
      const doc = await this.model
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

  async getMany(req, res) {
    try {
      const docs = await this.model
        .find({ createdBy: req.user._id })
        .lean()
        .exec()

      res.status(200).json({ data: docs })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  }
  async createOne(req, res) {
    let createdBy
    _.isNil(req.user) ? (createdBy = 'default') : (createdBy = req.user._id)

    try {
      console.log(req.body)
      const doc = await this.model.create({ ...req.body, createdBy })
      res.status(201).json({ data: doc })
    } catch (e) {
      console.error(e)
      res.status(400).json({ error: e })
    }
  }

  async updateOne(req, res) {
    try {
      const updatedDoc = await this.model
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

  async removeOne(req, res) {
    try {
      const removed = await this.model.findOneAndRemove({
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

  async getModel(req, res) {
    console.log('model: ', this.model)
    res.json({ message: 'hello' })
  }
}
