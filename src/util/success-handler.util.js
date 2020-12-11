// import ERRORS from './errors.util.js'
import HttpStatusCodesUtil from './http-status-codes.util.js'

class SuccessHandlerUtil {
    /**
     * @param {Object} response
     * @param {number} status
     * @param {Object} [data]
     * @description Send response.
     */
    static _sendResponse(response, status, data) {
 
        response.status(status).json(data)
    }

    /**
   * @param {Object} response
   * @param {Function} next
   * @param {Object} result 
   * @description Handle `get` type requests.
   */
    static handleGet(response, next, result) {
        if (!result) {
            return next(new ERROR('The specified resource is not found.'))
        }

        SuccessHandlerUtil._sendResponse(response, HttpStatusCodesUtil.OK, result)
    }

    /**
 * @param {Object} response
 * @param {Function} next
 * @param {Object} result
 * @description Handle `update` type requests.
 */
    static handleUpdate(response, next, result) {
        if (!result) {
            return SuccessHandlerUtil._sendResponse(response, HttpStatusCodesUtil.NO_CONTENT)
        }

        SuccessHandlerUtil._sendResponse(response, HttpStatusCodesUtil.OK, result)
    }
}

export default SuccessHandlerUtil