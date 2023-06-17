import 'dotenv/config'
import fastify from 'fastify'
import { privateRoutes } from './private'

const app = fastify()

app.get('/public', () => {
  return 'hello world'
})

app.register(privateRoutes)

app.listen({port:3333}).then(() => {
  console.log('HTTP server running ')
})