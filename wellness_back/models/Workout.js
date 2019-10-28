var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        name: { type: String },
        img_url: { type: String },
        duration : { type: String },
        where: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'place'
        }
    },
);

const Workout = mongoose.model("workout", workoutSchema, "workout");


module.exports = Workout;