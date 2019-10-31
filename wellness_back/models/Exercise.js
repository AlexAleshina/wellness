var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercisesSchema = new Schema(
    {
        exercise_name: { type: String },
        img_url: { type: String },
        description: { type: String },
        equipment: { type: Array }

    },
);

const Exercises = mongoose.model("exercises", exercisesSchema, "exercises");


module.exports = Exercises;