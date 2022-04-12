var express = require("express");

var router = express.Router();

// Load User model
const Buyer = require("../models/Buyers");

// GET request 
// Getting all the users
router.get("/getbuyer", function (req, res) {
    Buyer.find(function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    })
});

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


router.post("/edit/:email" , (req, res) => {
    let e_mail = req.params.email;

    const editedUser = new Buyer({
        name: req.body.name,
        contact_Number: req.body.contact_Number,
        age: req.body.age,
        batch_name: req.body.batch_name


    });

    
    Buyer.findOneAndUpdate({ email:e_mail }, editedUser, {
        new: true
    }).then(Doc => {
        res.status(200).json(Doc);
    })



});

router.post("/edit" , (req, res) => {
    let e_mail = req.body.email;

    const editedUser = new Buyer({
        name: req.body.name,
        contact_Number: req.body.contact_Number,
        age: req.body.age,
        batch_name: req.body.batch_name


    });

    
    Buyer.findOneAndUpdate({ email:e_mail }, editedUser, {
        new: true
    }).then(Doc => {
        res.status(200).json(Doc);
    })



});

router.post("/edit2" , (req, res) => {
    let email = req.body.email;

   

    
    Buyer.findOne({ email }).then(resp => {
        if (!resp) {
            resp.status(200).json({ error: "error" });
        }
        else {
           
             resp.name=req.body.name;
             resp.contact_Number=req.body.contact_Number;
             resp.age=req.body.age;
             resp.batch_name=req.body.batch_name;
            resp.save();
            res.json(resp);
        }
    })



});

module.exports = router;
