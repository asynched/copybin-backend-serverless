import { VercelApiHandler } from '@vercel/node'
import { ControllerCallback, iHTTPController } from '../lib/types'
import { routeNotFoundFallback } from '@controllers/fallback'
import { KeyOfType } from '@lib/types/lang'

export const makeRequestHandler = (
  controller: iHTTPController,
  fallback: ControllerCallback = routeNotFoundFallback
) => {
  const requestHandler: VercelApiHandler = (request, response) => {
    const requestMethod =
      request.method?.toLowerCase() as KeyOfType<iHTTPController>

    const handlerCallback = controller[requestMethod]

    if (handlerCallback) {
      return handlerCallback({ request, response })
    }

    return fallback({ request, response })
  }

  return requestHandler
}
