import express from 'express'
import * as Path from 'node:path'

import stepRoutes from './routes/bread.ts'
import starterRoutes from './routes/starter.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/steps', stepRoutes)
server.use('/api/v1/starter', starterRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
