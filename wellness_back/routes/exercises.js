const express = require('express');
const router = express.Router();
const Exercises = require("../models/Exercise");


router.get('/exercises', (req, res, next) => {
    Exercises.find({})
        .then((exercises) => {
            res.status(200).json(exercises)
        })
        .catch((err) => {
            res.status(500).json(err)
        });
})


router.get('/exercises/:id', (req, res, next) => {
    Exercises.findById(req.params.id)
        .then((exercise) => {
            res.status(200).json(exercise)
        })
        .catch((err) => {
            res.status(500).json(err)
        });
})

module.exports = router;