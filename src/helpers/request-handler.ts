import { VercelApiHandler } from '@vercel/node'
import { ControllerCallback, iHTTPController } from '@lib/types/index'
import { KeyOfType } from '@lib/types/lang'
import { routeNotFoundFallback } from '@controllers/fallback'

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
