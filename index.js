// start your server here
const server = require('./api/server')

const PORT = process.env.PORT || 8000;

server.listen('/', () => {
    console.log(`listening at port ${PORT}...`)
} )