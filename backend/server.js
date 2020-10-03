import express from 'express'
import mongoose from 'mongoose'
import Pusher from 'pusher'
import { PORT, USERNAME, PASSWORD, DB_NAME, MESSAGE_COLLECTION } from './config.js'
import Messages from './dbMessages.js'
import Cors from 'cors'

const app = express()

var pusher = new Pusher({
    appId: '1079151',
    key: '47b153ecf5693cf3ae6c',
    secret: '5e3d4a13066b04ee379b',
    cluster: 'eu',
    encrypted: true
});

app.use(express.json())
app.use((request, response, next) => {
    // request.setHeader("Access-Control-Allow-Origin", "*")
    // request.setHeader("Access-Control-Allow-Headers", "*")
    // request.setHeader('Content-Type', 'application/json');
    next()
})
app.use(Cors())

mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.lfccb.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection

db.once("open", () => {
    const msgCollection = db.collection(MESSAGE_COLLECTION)
    const changeStream = msgCollection.watch()
console.log("111")
    changeStream.on('change', (change) => {
        console.log("222")

        if (change.operationType === 'insert') {
            console.log("3333")

            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted', {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            })
        } else {
            console.log("Error triggering Pusher")
        }
    })
})

app.post('/messages/new', (req, res) => {
    const messages = req.body
    Messages.create(messages, (err, data) => {
        err ? res.status(500).send(err) : res.status(201).send(data)
    })
})

app.get('/messages/sync', (req, res) => {
    Messages.find({},(err, data) => {
        err ? res.status(500).send(err) : res.status(201).send(data)
    })
})

app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`))