import userRouter from './user/user.router'
import ideaRouter from './idea/idea.router'

export const router = app => {
  app.use('/api/users', userRouter), app.use('/api/ideas', ideaRouter)
}
