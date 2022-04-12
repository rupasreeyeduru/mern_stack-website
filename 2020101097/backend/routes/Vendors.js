var express = require("express");

var router = express.Router();

// Load User model
const Vendor = require("../models/Vendors");

// GET request 
// Getting all the users
router.get("/getvendor", function(req, res) {
    Vendor.find(function(err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});

router.post("/vregister", (req, res) => {
    const newUser = new Vendor({
        name: req.body.name,
        shop: req.body.shop,
        email: req.body.email,
        phone_number: req.body.phone_number,
        opening_closingtime: req.body.opening_closingtime,
        passwd:req.body.passwd
        
    });

    newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/edit2" , (req, res) => {
    let email = req.body.email;

   

    
    Vendor.findOne({ email }).then(resp => {
        if (!resp) {
            resp.status(200).json({ error: "Authentication Failed!" });
        }
        else {
           
             resp.name=req.body.name;
             resp.shop=req.body.shop;
             resp.phone_number=req.body.phone_number;
             resp.opening_closingtime=req.body.opening_closingtime;
            resp.save();
            res.json(resp);
        }
    })



});

module.exports = router;
