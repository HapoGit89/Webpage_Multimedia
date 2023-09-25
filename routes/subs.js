const express = require("express");


const router = new express.Router();


/** GET / => {books: [book, ...]}  */

router.get("/", async function (req, res, next) {
  res.render('home.ejs')
});

router.get("/audio", async function (req, res, next) {
    res.render('audio.ejs')
  });

router.get("/video", async function (req, res, next) {
    res.render('video.ejs')
});

router.get("/contact", async function (req, res, next) {
    res.render('contact.ejs')
});




module.exports = router;