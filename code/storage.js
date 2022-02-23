const pool = require('../../bd')

async function getProducts() {
    let results = null

    results = await pool.query('SELECT * FROM producto')

    return results.rows
}

module.exports = {
    get: getProducts,
}