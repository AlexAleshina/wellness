const express = require('express');
const router = express.Router();
const Result = require("../models/Result");
const ObjectId = require('mongoose').Types.ObjectId;

router.post('/results/save', (req, res, next) => {
    let { exerciseId, duration, sets } = req.body;

    let result = new Result({
        exerciseId,
        duration,
        sets,
        creationTime: new Date().valueOf(),
        userId: req.user.id
    });

    result.save()
        .then(savedResult => {
            res.status(201).json(savedResult);
        })
        .catch(err => {
            res.status(500).json(err);
        });
})

router.get('/results/available', async (req, res, next) => {
    if (req.isAuthenticated()) {
        const userId = req.user.id;

        const exerciseIds = await Result
            .find({ userId: new ObjectId(userId) })
            .distinct("exerciseId");

        let results = [];
        for (const exerciseId of exerciseIds) {

            var resultsPerExercise = await Result
                .find({ userId: new ObjectId(userId), exerciseId, sets: { $exists: true, $ne: [] } })
                .populate("exerciseId", "exercise_name")
                .sort({ creationTime: 1 });

            let exerciseData = [];
            let exerciseName = null;
            for (const result of resultsPerExercise) {
                exerciseName = result.exerciseId.exercise_name;

                exerciseData.push({
                    creationTime: result.creationTime,
                    value: result.sets.map(s => s.weight).reduce((total, cur) => { return total + cur }) / result.sets.length
                });
            }

            results.push({
                exerciseId: exerciseId,
                exercise_name: exerciseName,
                yAxisName: "Weight",
                values: exerciseData
            });
        }

        res.status(200).json(results);
    } else {
        res.sendStatus(403);
    }
})



module.exports = router;
