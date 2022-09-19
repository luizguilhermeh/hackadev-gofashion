const produtosData = require('../data/produtosData')
exports.getProdutos = function () {
    return produtosData.getProdutos()
}