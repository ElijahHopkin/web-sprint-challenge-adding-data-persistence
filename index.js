// start your server here
const server = require('./api/server')

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`RUNNING ON PORT ${PORT}...`)
})