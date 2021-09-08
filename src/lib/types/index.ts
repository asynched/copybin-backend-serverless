import { VercelRequest, VercelResponse } from '@vercel/node'
import { Optional } from './lang'

export type VercelRequestContext = {
  request: VercelRequest
  response: VercelResponse
}

export type ControllerCallback = (
  context: VercelRequestContext
) => Optional<Promise<Optional<VercelResponse>>>

export interface iHTTPController {
  get?: ControllerCallback
  post?: ControllerCallback
  put?: ControllerCallback
  delete?: ControllerCallback
}

export type RequestVerbs = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
