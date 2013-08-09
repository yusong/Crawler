(function(){

	var test = function(data, callback) {
		console.log('me and you');
		callback(null, 'me and you');
	}

	var Server = require('./server');
	var server = new Server.Server({
		host : '127.0.0.1',
		port : '8000'
	});

	server.expose('/test', test);


}());