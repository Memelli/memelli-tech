const Experiences = require('./experiences');
const errorHandler = require('../common/errorHandler')

Experiences.methods(['get', 'post', 'put', 'delete'])
Experiences.updateOptions({
    new: true,
    runValidators: true
})
Experiences.after('post', errorHandler)
Experiences.after('put', errorHandler)

Experiences.route('get', (req, res, next) => {
    Experiences.find({}, (error, docs) => {
        if (!error) {
            res.json(docs)
        } else {
            res.status(500).json({
                errors: [error]
            })
        }
    })
})

Experiences.route('count', (req, res, next) => {
    Experiences.count((error, value) => {
        if (error) {
            res.status(500).json({
                errors: [error]
            })
        } else {
            res.json({ value })
        }
    })
})

Experiences.route('summary', (req, res, next) => {
    BillingCycle.aggregate({

    })
})

module.exports = Experiences