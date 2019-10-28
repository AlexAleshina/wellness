const express = require('express');
const router = express.Router();
const Exercise = require("../models/Exercise");


router.get('/exercises', (req, res, next) => {

    // const newPlace = new Place({
    //     name: "forest",
    //     img_url: ""
    // });

    // newPlace.save(err => {
    //     if (err) {
    //         res.status(400).json({ message: 'Saving user to database went wrong.' });
    //         return;
    //     }
    // })
    Exercise.find({})
        .then((exercise) => {
            res.status(200).json({ exercise })
        })
        .catch((err) => {
            res.status(500).json(err)
        });
})

module.exports = router;