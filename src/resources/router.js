import userRouter from './user/user.router'

export const router = app => (
    app.use('/api/users', userRouter)
)