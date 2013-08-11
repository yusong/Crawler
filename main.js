(function() {

	require('./global');

	function createServer() {

		var server = require('./Server');
		server = new server.Server({
			host : GLOBAL_CONF.server.host,
			port : GLOBAL_CONF.server.port
		});

		var Crawler = require('Crawler');
		Crawler = new Crawler.Crawler();
		Crawler.flush();

		server.expose('/pull', Crawler.pull.bind(Crawler));
		server.expose('/ack', Crawler.ack.bind(Crawler));
	}

	createServer();	

}());