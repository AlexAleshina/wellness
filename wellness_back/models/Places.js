var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placeSchema = new Schema(
    {
        name: { type: String },
        img_url: { type: String }
    },
);

const Place = mongoose.model("place", placeSchema, "place");


module.exports = Place;