import mongoose from 'mongoose'
import Config from '../config/variables.js'
import LoggerUtil from '../util/logger.util.js'

const { MONGO_OPTIONS, MONGODB } = Config

const DB_URI = process.env.MONGO_URI || MONGODB.URL

class MongodbStorage {
  /**
  * @description Initiate Mongoose connection and attach event listeners to it.
  */
  static init = async () => {

    mongoose.connection.on('connected', MongodbStorage._onConnected)
    mongoose.connection.on('error', MongodbStorage._onError)
    mongoose.connection.on('disconnected', MongodbStorage._onDisconnected)
    return mongoose.connect(DB_URI, MONGO_OPTIONS).catch(MongodbStorage._onConnectionOpeningError)
  }
  /**
 * @description Connection opening error handler.
 */
  static _onConnectionOpeningError(error) {
    LoggerUtil.error(`Failed to init Mongoose connection: ${error.message}`)
  }
  /**
 * @description On connected event handler.
 */
  static _onConnected() {
    LoggerUtil.info('Mongoose connected.')
  }
  /**
 * @description On disconnected event handler.
 */
  static _onDisconnected() {
    LoggerUtil.error('Mongoose disconnected.')
  }

  /**
   * @description On error event handler.
   */
  static _onError(error) {
    LoggerUtil.error(`Mongoose connection error: ${error.message}`)
  }
}

export default MongodbStorage