const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors')
const queryParser = require('express-query-int')
const server = express()

const port = 3005;

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function() {
    console.log(`API up on port ${port}.`)
})

module.exports = server