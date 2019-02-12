import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config'

export const app = express()

app.use(cors())
app.use(morgan('dev'))


export const start = async () => {
    try {
        await connect()
        app.listen(config.port, () => {
            console.log('API Up and Running')
        })
    } catch (e) {
        console.error(e)
    }
}