import FileController from '../../src/controllers/file'
import { makeRequestHandler } from '../../src/helpers/request-handler'

export default makeRequestHandler({
  post: FileController.createFile,
})
