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

		var publicFunc = require('./publicFunc').PublicFunc;
		

		server.expose('/push', Crawler.push.bind(Crawler));
		server.expose('/pull', Crawler.pull.bind(Crawler));
		server.expose('/ack', Crawler.ack.bind(Crawler));
		server.expose('/getHandler', publicFunc.getHandler);
	}

	createServer();	

}());