export class PublicBaseController {
  constructor(mongooseModel) {
    this.mongooseModel = mongooseModel
  }

  createOne = async (req, res) => {
    try {
      const doc = await this.mongooseModel.create({ ...req.body })
      res.status(201).json({ success: true, data: doc })
    } catch (e) {
      console.error(e)
      res.status(400).json({ success: false })
    }
  }

  getMany = async (req, res) => {
    try {
      const docs = await this.mongooseModel
        .find({})
        .lean()
        .exec()

      res.status(200).json({ success: true, data: docs })
    } catch (e) {
      console.error(e)
      res.status(400).json({ success: false })
    }
  }

  getOne = async (req, res) => {
    try {
      const doc = await this.mongooseModel
        .findOne({ _id: req.params.id })
        .lean()
        .exec()

      if (!doc) {
        return res.status(400).json({ success: false })
      }

      return res.status(200).json({ success: true, data: doc })
    } catch (e) {
      console.error(e)
      return res.status(400).json({ success: false })
    }
  }

  updateOne = async (req, res) => {
    try {
      const updatedDoc = await this.mongooseModel
        .findOneAndUpdate(
          {
            _id: req.params.id
          },
          req.body,
          { new: true }
        )
        .lean()
        .exec()

      if (!updatedDoc) {
        return res.status(400).json({ success: false })
      }

      return res.status(200).json({ success: true, data: updatedDoc })
    } catch (e) {
      return res.status(400).json({ success: false })
    }
  }

  removeOne = async (req, res) => {
    try {
      const removed = await this.mongooseModel.findOneAndRemove({
        _id: req.params.id
      })

      if (!removed) {
        return res.status(400).json({ success: false })
      }

      return res.status(200).json({ success: true, data: removed })
    } catch (e) {
      console.error(e)
      res.status(400).json({ success: false })
    }
  }

  destroy = async (req, res) => {
    const { key } = req.params

    if (key === 'toopowerful') {
      this.mongooseModel
        .remove({})
        .then(() => res.status(200).json({ success: true }))
        .catch(() => res.status(400).json({ success: false }))
    } else {
      return res.status(401).json({ success: false, message: 'Sorry bud!' })
    }
  }
}
