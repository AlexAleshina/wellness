const express = require('express');
const router = express.Router();
const Workout = require("../models/Workout");


router.get('/workout/:whereId', (req, res, next) => {
    console.log(req.param)
    Workout.find({ }) //where: ObjectId(req.params.where)
    
        .then((workout) => {
            res.status(200).json({ workout })
        })
        .catch((err) => {
            res.status(500).json(err)
        });
})

module.exports = router;