const bodyParser = require('body-parser');
const express = require('express');
const server = express()

const port = 3005;

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.listen(port, function() {
    console.log(`API up on port ${port}.`)
})

module.exports = server