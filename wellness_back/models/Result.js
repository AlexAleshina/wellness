var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resultSchema = new Schema(
    {
        exerciseId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'exercises'
        },
        userId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'users'
        },
        duration: { type: Number },
        creationTime: { type: Number },
        sets: [
            {
                reps: { type: Number },
                weight: { type: Number}
            }
        ]
    },
);

const Results = mongoose.model("Results", resultSchema);

module.exports = Results;
