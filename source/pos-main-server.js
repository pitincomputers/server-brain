
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.end("You invoked a GET api call")
    console.log("Got a GET call")
})
app.post('/test', function (req, res) {
    console.log(req.query)
    data = req.query
    if(req.query.code=='5555'){
        res.send(data.table)
    }
    else{
        res.send('invalid code')
    }

})
var server = app.listen(8000, function () {
   console.log("Express App running at http://127.0.0.1:8000/");
})