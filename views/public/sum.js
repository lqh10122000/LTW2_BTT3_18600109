var express = require("express");

const views = express.views();


views.get("/", function(req, res)
{
    console.log("testing");
});

module.exports = views;