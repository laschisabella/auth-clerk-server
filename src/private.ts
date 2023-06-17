import { clerkPlugin, getAuth, clerkClient } from "@clerk/fastify";
import { FastifyInstance } from "fastify";

export async function privateRoutes(app: FastifyInstance) {
  app.register(clerkPlugin)
  
  app.get('/private', async (request, reply)=> {

    const {userId} = getAuth(request)

    if (!userId) {
      return reply.status(403).send()
    } // not logged in

    // fetch data from user
    const user = await clerkClient.users.getUser(userId)

    return user
  })
}