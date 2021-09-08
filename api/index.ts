import { makeRequestHandler } from '@helpers/request-handler'

export default makeRequestHandler({
  get: (context) =>
    context.response.json({ message: 'Hello, world!' }).status(200) && void 0,
})
