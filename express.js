var express = require('express');
var app = express();
var path = require('path');

//used for POST data action in HTML
var bodyParser = require('body-parser');

//urlencoded parser called back from bodyParser();
var urlencodedParser = bodyParser.urlencoded({ extended : false });

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

//Retrieve method
app.get('/process_get', function(req, res) {
    //Output in JSON format
    //The method below retrieves data from (request.query._____)
    response = {
        first_name: req.query.first_name,
        second_name: req.query.second_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

//Post method
app.post('/process_post', urlencodedParser, function(req, res) {
    //Prepare output in JSON format
    response = {
        first_name: req.body.first_name,
        second_name: req.body.second_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.listen(5000, function () {
    console.log("Express App running at http://127.0.0.1:5000/");
});