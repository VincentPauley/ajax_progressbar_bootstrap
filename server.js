var express = require('express'),
    app = express();



var types_of_eggs = [
		"scrambled",
		"fried",
		"poached",
		"deviled",
		"over easy",
		"hard boiled"
	];

app.use('/', express.static( __dirname + '/public' ));
app.use('/', express.static( __dirname + '/bower_components' ));
app.get('/get-eggs', function(req, res) {
	console.log('GET request has been received.');

	var latency = (Math.random() * 10000) + 3000;
	console.log('Latency: ' + latency);
	setTimeout((function() {
		res.send( types_of_eggs );
	}), latency);
});



app.listen(8080, function() {
	console.log('listening on port 8080');
});
