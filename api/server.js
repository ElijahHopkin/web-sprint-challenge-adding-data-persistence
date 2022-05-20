// build your server here and require it from index.js
const express = require('express')

const server= express()

server.use(express.json())

server.use('/', (req, res) => {
    res.json("LET'S GET READY TO RUMBLE!!")
})

module.exports= server