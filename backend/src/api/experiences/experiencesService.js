const Experiences = require('./experiences');

Experiences.methods(['get', 'post', 'put', 'delete'])

Experiences.updateOptions({
    new: true,
    runValidators: true
})

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
            res.json({value})
        }
    })
})

Experiences.route('summary', (req, res, next) => {
    BillingCycle.aggregate({
        
    })
})

module.exports = Experiences