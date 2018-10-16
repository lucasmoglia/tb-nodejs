var rp = require('request-promise'),
    querystring = require('querystring');

var _param = process.argv.splice(2).join(" ");;

console.log("Getting echo from: " + 'http://server:8090/api/' + encodeURIComponent(_param));
var options = {
    uri: 'http://server:8090/api/' + encodeURIComponent(_param),
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

rp(options)
    .then(function (res) {
	console.log("Hey! We've a response here! The server said...");
	console.log(res);
    })
    .catch(function (err) {
	console.log("Something went wrong with the response");
	console.log(err);
    });
