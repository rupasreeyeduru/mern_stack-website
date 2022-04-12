const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
    shop: {
        type:String,
        required: true
    },
	email: {
		type: String,
		required: true
	},
	phone_number:{
		type: Number,
		required: true
	},
    opening_closingtime:{
        type:Number,
        required:true
    },
	passwd: {
        type: String,
        required: true
    }

});

module.exports = User = mongoose.model("Vendors", UserSchema);
