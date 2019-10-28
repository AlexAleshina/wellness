const express = require('express');
const router = express.Router();
const Place = require("../models/Places");


router.get('/places', (req, res, next) => {

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
    Place.find({})
        .then((places) => {
            res.status(200).json({ places })
        })
        .catch((err) => {
            res.status(500).json(err)
        });
})

module.exports = router;