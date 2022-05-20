// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model')

const router = express.Router();


router.get('/', (req, res, next) => {
    Resources.getAll()
        .then(results => {
            res.json(results)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Resources.add(req.body)
        .then(results => {
            res.status(201).json(results)
        })
        .catch(next)
})

module.exports= router;