import { ControllerCallback } from '@lib/types/index'

export const routeNotFoundFallback: ControllerCallback = context => {
  const { response } = context

  response
    .json({ message: "The route you're trying to access does not exist" })
    .status(404)
}
