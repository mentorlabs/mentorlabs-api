import { Router } from 'express'
import { me, updateMe } from './user.controllers'

const router = Router()

router.get('/me', me)
router.put('/me', updateMe)

export default router