(function() {

	function createServer() {

		var server = require('./Server');
		server = new server.Server({
			host : '127.0.0.1',
			port : '8000'
		});

		var Crawler = require('Crawler');
		Crawler = new Crawler.Crawler();

		server.expose('/pull', Crawler.pull.bind(Crawler));
	}

	createServer();
	

}());