var express = require("express");
const { findByIdAndDelete } = require("../models/Buyers");
var router = express.Router();

const Item = require("../models/Food");


router.post("/add", (req, res) => {
    const newItem = new Item({
      name:req.body.name,
      price:req.body.price,
      rating:req.body.rating,
      veg_nonveg:req.body.veg_nonveg,
      email:req.body.email

    });

    newItem.save()
        .then(item => {
            res.status(200).json(item);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});


router.get("/:email", (req, res) => {
	const email = req.params.email;

	Item.find({ email }).then(user => {
		
		if (!user) {
			return res.status(404).json({
				error: "Email not found",
			});
        }
        else{
            res.send(user);
            return user;
        }
	});
});


router.post("/delete", (req, res) => {
   let id=req.body.id;

   Item.findByIdAndDelete(id,function(err,aaa){

    res.send(err);
   });

    
});

router.get("/", function(req, res) {
    Item.find(function(err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});





module.exports = router;