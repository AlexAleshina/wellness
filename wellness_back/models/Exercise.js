var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
    {
        exercise_name: { type: String },
        img_url: { type: String },
        description: { type: String },
        equipment: { type: Array }

    },
);

const Exercise = mongoose.model("exercise", exerciseSchema, "exercises");


module.exports = Exercise;