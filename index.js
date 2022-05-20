// start your server here
const server = require('./api/server')

const PORT = process.env.PORT || 3000

server.listen('/', () => {
    console.log(`RUNNING ON PORT ${PORT}...`)
})