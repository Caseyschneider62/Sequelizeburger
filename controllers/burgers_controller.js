
var express = require('express');
var router = express.Router();
var db = require('../models/');

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    db.Burger.findAll()
    .then(function(dbBurger){
        console.log(dbBurger);
        var hbsObject = { burger: dbBurger };
        return res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function(req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name
    })
    .then(function(dbBurger){
        console.log(dbBurger);
        res.redirect("/");
    });
});

router.put("/burgers/update", function(req, res) {
    db.Burger.update(
    {
        devoured: true
    },
    {
        where: {
            id: req.body.burger_id
        }
    }
    ).then(function(dbBurger){
        console.log(dbBurger);
        res.redirect("/");
    });
});

module.exports = router;















// router.get('/', function (req, res) {
//     queries.show(function(data){
//         console.log(data);
//         var data1 = {
//             burgerData: data
//         }
//         res.render('index', {data : data});
//         res.render('index', data1);
//     });
// });

// router.post('/create', function (req, res) {
//     queries.add(req.body.item, function(data) {
//         res.redirect('/');
//     });
// });

// router.post('/update/:id', function (req, res) {
//     queries.eat(req.params.id, function(data) {
//         res.redirect('/');
//     });
// });

// module.exports = router;