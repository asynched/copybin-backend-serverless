import { VercelRequestContext } from '../lib/types'
import { PrismaClient } from '.prisma/client'

const client = new PrismaClient()

export default class FileController {
  static async getFile(context: VercelRequestContext) {
    const { request, response } = context
    const { query: params } = request
    const id = params.id as string

    const file = await client.file.findFirst({
      where: {
        id,
      },
    })

    if (file) {
      return response.json({ message: 'File route ' + id }).status(200)
    }

    return response.json({ message: 'File was not found' }).status(404)
  }

  static async createFile(context: VercelRequestContext) {
    const { request } = context
  }
}
