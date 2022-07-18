// implement your server here
// require your posts router and connect it here
const express = require('express')

const server = express()

server.use(express.json())






// CATCH ALL
server.use('*', (req, res) => {
    res.status(404).json({
        message: 'catch all Error'
    })
})

module.exports = server