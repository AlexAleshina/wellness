const express = require('express');
const router = express.Router();
const Workout = require("../models/Workout");
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/workout/:placeId', (req, res, next) => {
    Workout.find({ "where": new ObjectId(req.params.placeId)}) //where: ObjectId(req.query.where)
        .then((workout) => {
            res.status(200).json({ workout })
        })
        .catch((err) => {
            res.status(500).json(err)
        });
})

router.get('/workout/placeId/:workoutId', (req, res, next) => {
    Workout.findOne({ "_id": new ObjectId(req.params.workoutId)}) //where: ObjectId(req.query.where)
    .populate('exercises')
        .then((workout) => {
            res.status(200).json( workout )
        })
        .catch((err) => {
            res.status(500).json(err)
        });
})

module.exports = router;