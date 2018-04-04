var express = require('express');
var router = express.Router();

//Get Sidebar Model
var Sidebar = require('../models/sidebar');

/* 
    GET Edit sidebar
*/
router.get('/edit-sidebar', function (req, res) {
    var id = "5ac4324df007d42be4d92617"
    Sidebar.findById(id, function (err, sidebar) {
        if (err) console.log(err);
        res.json(sidebar);
    });
});

/* 
    POST Add Page
*/
router.post('/add-page', function (req, res) {

    var id = "5ac4324df007d42be4d92617"

    Sidebar.findById(id, function (err, sidebar) {
        if (err) console.log(err);

        sidebar.content = req.body.content;

        sidebar.save(function (err) {
            if (err) {
                console.log(err);
                res.json("problem");
            } else {
                res.json("ok");
            }
        });
    });    
});

// Exports
module.exports = router;