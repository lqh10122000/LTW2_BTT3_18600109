const express = require('express')
const router = require('./routers/router.js')

var bodyParser = require('body-parser');

var PORT = process.env.PORT || 5000;


var urlencodedParser = bodyParser.urlencoded({ extended: false })
 


// const path = require("path");
const app = express()

app.use(express.static(__dirname + '/views/public'));

app.set('view engine', 'ejs')

app.use('/router', router)

app.get('/', function(req, res) 
{
    res.render('public/index.ejs', {qs: req.query})
})

app.post('/sum', urlencodedParser, function(req, res) 
{
    console.log(req.body)
    res.render('public/sum', {data: req.body})
    

})


// app.get('/sum', (req, res) =>
// {
//     res.render('public/sum.ejs', {qs : req.query })
// })


// app.get('/', (req, res) =>
// {
//     let x = 
//     res.render("public/sum.ejs")

// })



app.listen(PORT);

// const views = express.views("./views/index.html");

// app.set("port", process.env.port || 3000);

// app.use(views);

// app.listen(app.get("port"), function()
// {
//     console.log("server start port 3000");
// });