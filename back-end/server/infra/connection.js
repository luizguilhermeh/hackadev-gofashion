const pgp = require('pg-promise')()
const bd = pgp(
    {
        user: 'postgres',
        password: '123456',
        host: 'localhost',
        port: '5432',
        database: 'db_produtos'

    }
)

module.exports = bd