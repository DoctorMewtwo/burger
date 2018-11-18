var express = require("express")

var burger = require("../models/burger");

var router = express.Router();


router.get("/" , function(req , res) {
    burger.all(function(data) {
        var nwObject = {
            burgers : data
        };
        res.render("index" , nwObject);
    });
});

router.post("/api/burgers" , function(req , res) {
    burger.create([req.body.burger_name , req.body.devoured ] , function(result) {
        res.json({id: result.insertID});
    });
});

router.put("/api/burgers/:id" , function(req , res) {
    burger.update([req.body.burger_name , req.body.devoured , req.params.id] , function(result) {
        res.status(200).end();
    });
});

module.exports = router;