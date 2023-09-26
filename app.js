const express = require("express");
const app = express();
const path = require('path')

app.use(express.json());

const Routes = require("./routes/subs");

app.use("/", Routes);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static('public'));

/** 404 handler */

app.use(function (req, res, next) {
  res.send("THIS is my 404!!!")
});


/** general error handler */

app.use(function(err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message
  });
});

app.listen(3000, () => {
    console.log(`Server starting on port 3000`);
  });


module.exports = app;