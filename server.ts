import Fastify from 'fastify'
import { Type } from '@fastify/type-provider-typebox'
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

const fastify = Fastify().withTypeProvider<TypeBoxTypeProvider>()

fastify.get('/hello', {
  schema: {
    response: {
      200: Type.Object({
        hello: Type.String(),
      }),
    },
  },
}, async (request, reply) => {
  return reply.status(200).send({ hello: 'world', foo: 'bar' })
})

await fastify.listen({ port: 3000 })
