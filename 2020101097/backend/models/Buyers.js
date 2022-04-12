const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact_Number: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    batch_name: {
        type: String,
        required: true
    },
    passwd: {
        type: String,
        required: true
    }

});

module.exports = User = mongoose.model("Buyers", UserSchema);
