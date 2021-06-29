const restful = require('node-restful');
const mongoose = restful.mongoose

const listExperiences = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    startAt: { type: Date, required: false },
    endAt: { type: Date, required: false },
    languages: [{ type: String, required: true }],
    photo: { type: String, required: false },
})

module.exports = restful.model('Experiences', listExperiences)