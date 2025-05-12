# fastify-typebox-demo

This demo is set to showcase the usage of Fastify with TypeBox for type-safe API development.
It includes a simple Fastify server with a one routes, demonstrating how to use TypeBox
to provide type safety for responses.

## Instructions

1. clone this repository
2. `npm install` 
3. `npm run test` see that it fails

You should see the following error:

```
server.ts:16:51 - error TS2353: Object literal may only specify known properties, and 'foo' does not exist in type '{ hello: string; }'.

16   return reply.status(200).send({ hello: 'world', foo: 'bar' })
                                                     ~~~


Found 1 error in server.ts:16
```

You can always use `npm run start` to start the server with `--experimental-strip-types` flag.

## License

MIT
