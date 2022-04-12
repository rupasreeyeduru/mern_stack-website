var express = require("express");

var router = express.Router();

const Buyer = require("../models/Buyers");

const Vendor = require("../models/Vendors");




router.post("/bregister", (req, res) => {
    const newUser = new Buyer({
        name: req.body.name,
        email: req.body.email,
        contact_Number: req.body.contact_Number,
        age: req.body.age,
        batch_name: req.body.batch_name,
        passwd: req.body.passwd

    });

    newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});





router.post("/vregister", (req, res) => {
    const newUser = new Vendor({
        name: req.body.name,
        shop: req.body.shop,
        email: req.body.email,
        phone_number: req.body.phone_number,
        opening_closingtime: req.body.opening_closingtime,
        
        passwd: req.body.passwd

    });

    newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});


module.exports = router;