import express from 'express'
import cors from 'cors'
import { env } from './config/env.js'
import { healthRouter } from './routes/health.js'
import { meRouter } from './routes/me.js'
import { errorHandler } from './middleware/errorHandler.js'

const app = express()

app.use(cors({ origin: env.corsOrigin }))
app.use(express.json())

app.use('/api', healthRouter)
app.use('/api/me', meRouter)

app.use(errorHandler)

app.listen(env.port, () => {
  console.log(`API listening on port ${env.port}`)
})
