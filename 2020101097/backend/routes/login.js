const express = require("express")
var router = express.Router();



const Buyers = require("../models/Buyers")
const Vendors = require("../models/Vendors")




router.post("/", (req, res) => {
    const email = req.body.email;
    const passwd = req.body.passwd;

    Buyers.findOne({ email: email, passwd: passwd }).then(Buyer => {
        if (!Buyer) {
            Vendors.findOne({ email: email, passwd: passwd }).then(Vendor => {
                if (!Vendor) {
                    res.status(200).json({ error: "Authentication Failed!" });
                }
                else {
                    res.status(200).json(Vendor);
                }
            })
        }
        else {
            res.status(200).json(Buyer);

        }
    })

})

router.post("/vprof", (req, res) => {
    const email = req.body.email;




    Vendors.findOne({ email: email }).then(Vendor => {
        if (!Vendor) {
            res.status(200).json({ error: "Authentication Failed!" });
        }
        else {
            res.json(Vendor);
        }
    })




})

router.post("/bprof", (req, res) => {
    const email = req.body.email;




    Buyers.findOne({ email: email }).then(Buyer => {
        if (!Buyer) {
            res.status(200).json({ error: "Authentication Failed!" });
        }
        else {
            res.json(Buyer);
        }
    })




})
//exporting Router that is created
module.exports = router;