import userRouter from './user/user.router'
import projectRouter from './project/project.rouiter'

export const router = app => {
    app.use('/api/users', userRouter)
    app.use('/api/projects', projectRouter)
}
