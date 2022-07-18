const server = require('./api/server')


// require your server and launch it here
console.log("hello")

const PORT = 5000

server.listen(PORT, () => {
    console.log('listening on', PORT)
})