import mongoose from 'mongoose'
import { MESSAGE_COLLECTION } from './config.js'

const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
})
const model = mongoose.model(MESSAGE_COLLECTION, whatsappSchema)
export default model