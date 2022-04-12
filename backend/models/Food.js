const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
    price: {
        type:Number,
        required: true
    },
	rating: {
		type: Number,
		required: true
	},
	veg_nonveg:{
		type: String,
		required: true
	},
	email:{
		type:String,
		required: true
	}
   

});

module.exports = User = mongoose.model("Food", UserSchema);
