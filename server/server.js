var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    morgan = require('morgan');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

if(process.env.NODE_ENV !== 'test') app.use(morgan('dev'));

var router = express.Router();

router.get('/api/:message', function(req, res) {
   res.send(req.params.message);
});

app.use(router);

app.listen(8090, function() {
  console.log("Node server running on http://localhost:8090");
});

module.exports = app;
