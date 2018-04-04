var express = require('express');
var router = express.Router();

//Get Page Model
var Page = require('../models/page');

/* 
    GET All Pages
*/
router.get('/', function (req, res) {
    Page.find({}, function (err, pages) {
        if (err) console.log(err);
        res.json(pages);
    });
});

/* 
    GET a Page
*/
router.get('/:slug', function (req, res) {

    var slug = req.params.slug;

    Page.findOne({ slug: slug }, function (err, page) {
        if (err) console.log(err);
        res.json(page);
    });
});

/* 
    POST Add Page
*/
router.post('/add-page', function (req, res) {

    var title = req.body.title;
    var slug = req.body.title.replace(/\s+/g,'-').toLowerCase();
    var content = req.body.content;    
    var hasSidebar = req.body.hasSidebar;
    var sidebar = (hasSidebar) ? "yes" : "no";

    Page.findOne({ slug: slug}, function (err, page) {
        if (err) console.log(err);
        if (page) {
            res.json('pageExists');
        } else {
            var page = new Page({
                title: title,
                slug: slug,
                content: content,
                sidebar: sidebar
            });

            page.save(function (err) {
                if (err) console.log(err);
                res.json("ok");
            });
        }
    });
});

/* 
    GET Edit Page
*/
router.get('/edit-page/:id', function (req, res) {
    console.log('geting edit');
    var id = req.params.id;

    Page.findById(id, function (err, page) {
        if (err) console.log(err);
        res.json(page);
    });
});

/* 
    POST Edit Page
*/
router.post('/edit-page/:id', function (req, res) {    
    console.log('post');
    var id = req.params.id;

    var title = req.body.title;
    var slug = req.body.title.replace(/\s+/g, '-').toLowerCase();
    var content = req.body.content;
    var hasSidebar = req.body.hasSidebar;
    var sidebar = (hasSidebar) ? "yes" : "no";

    Page.findOne({ slug: slug, _id: { '$ne': id } }, function (bfErr, bfPage) {
        if (bfErr) {
            console.log(bfErr);
        } else if (bfPage) {
            res.json('pageExists');
        } else {
            Page.findById(id, function (err, page) {
                if (err) console.log(err);

                page.title = title;
                console.log(title)
                page.content = content;
                console.log(content)
                page.slug = slug;
                console.log(slug)
                page.sidebar = sidebar;

                page.save(function (err) {
                    if (err) {
                        console.log(err);
                        res.json("problem");
                    } else {
                        res.json("ok");
                    }
                });               
            });
        }
    });    
});

/* 
    GET Delete Page
*/
router.get('/delete-page/:id', function (req, res) {
    console.log('geting edit');
    var id = req.params.id;

    Page.findByIdAndRemove(id, function (err) {
        if (err) {
            console.log(err);
            res.json("error");
        } else {
            res.json("ok");
        }
        
    });
});

// Exports
module.exports = router;