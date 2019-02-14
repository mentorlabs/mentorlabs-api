import { User } from './user.model'
import { crudControllers } from '../../utils/crud'

export const me = (req, res) => {
    res.status(200).json({ data: req.user })
}

export const updateMe = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.user._id, req.body, {
            new: true
        })
            .lean()
            .exec()

        res.status(200).json({ data: user })
    } catch (e) {
        console.error(e)
        res.status(400).end()
    }
}

export const controllers = {
    me,
    updateMe,
}