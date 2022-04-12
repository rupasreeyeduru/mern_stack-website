const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const DB_NAME = "tutorial"

// routes
var testAPIRouter = require("./routes/testAPI");
var UserRouter = require("./routes/Users");
var BuyerRouter=require("./routes/Buyers");
var VendorRouter=require("./routes/Vendors");
var LoginRouter=require("./routes/login");
var RegisterRouter=require("./routes/register");
var foodlistRouter=require("./routes/foodlist");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
mongoose.connect('mongodb+srv://admin:admin@cluster0.xkhdx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' + DB_NAME, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully !");
})

// setup API endpoints
app.use("/testAPI", testAPIRouter);
app.use("/user", UserRouter);
app.use("/Vendors",VendorRouter);
app.use("/Buyers",BuyerRouter);
app.use("/login",LoginRouter);
app.use("/register",RegisterRouter);
app.use("/foodlist",foodlistRouter);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
