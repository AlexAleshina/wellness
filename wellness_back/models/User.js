var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String },
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
);

const User = mongoose.model("Users", userSchema);


module.exports = User;