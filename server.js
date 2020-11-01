const express = require('express')

const bodyParser = require('body-parser')
const { mongoose } = require('./database/db');
const cors = require('cors')





const PORT = 2000
const api = require('./routes/api')
const app = express();
app.use(cors())



app.use(bodyParser.json())

app.use('/api', api)
app.get('/', function(req, res) {
    res.send('Hello from server')
})
app.listen(PORT, () => console.log('server running on localhost ' + PORT));