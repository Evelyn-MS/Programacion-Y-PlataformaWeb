const storage = require('./storage')

function getProducts() {
    return new Promise( (resolve, reject) => {
        resolve( storage.get( ) )
    } )
}

module.exports = {
    getProducts,
}