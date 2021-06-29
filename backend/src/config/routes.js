const express = require('express')

module.exports = function(server) {
    const router = express.Router()
    server.use('/api', router)

    const Experiences = require('../api/experiences/experiencesService')
    Experiences.register(router, '/last-jobs')
}