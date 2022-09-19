const db = require('../infra/connection')

exports.getProdutos = function () {
    return db.query('SELECT * FROM produtos')
}