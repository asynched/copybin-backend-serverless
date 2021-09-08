import FileController from '@controllers/file'
import { makeRequestHandler } from '@helpers/request-handler'

export default makeRequestHandler({
  get: FileController.getFile,
})
