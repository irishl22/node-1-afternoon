const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use( express.static( __dirname + '/../public/build' ) );

const mc = require('./controllers/messages_controller')
const baseUrl = '/api/messages'

app.post(baseUrl, mc.create)
app.get(baseUrl, mc.read)
app.put(`${baseUrl}/:id`, mc.update)
app.delete(`${baseUrl}/:id`, mc.delete)


const PORT = 3001
app.listen(PORT, () => console.log(`listening on ${PORT}`))