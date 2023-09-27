const express = require("express");
const shuffle = require("../helpers/shuffle")
const pics = require ("../assets/pictures")


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

router.get("/references", async function (req, res, next) {
  res.render('references.ejs')
});

router.get("/pics", async function (req, res, next) {
  const mypics= shuffle(pics)
  res.render('pics.ejs', {pics: mypics})
});

router.get("/picsarray", async function (req, res, next) {
  const mypics= shuffle(pics)
  res.json({pics})
});




module.exports = router;