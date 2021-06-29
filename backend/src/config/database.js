const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb+srv://memelli:memelli123@cluster0.n5l6g.mongodb.net/site?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log('Banco de dados conectado.')})
mongoose.set('useFindAndModify', false);

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."