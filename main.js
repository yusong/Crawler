(function() {

	require('./global');

	function createServer() {

		var server = require('./server');
		server = new server.Server({
			host : GLOBAL_CONF.server.host,
			port : GLOBAL_CONF.server.port
		});

		var Crawler = require('crawler');
		Crawler = new Crawler.Crawler();
		Crawler.flush();

		var publicFunc = require('./publicFunc').PublicFunc;
		

		server.expose('/push', Crawler.push.bind(Crawler));
		server.expose('/pull', Crawler.pull.bind(Crawler));
		server.expose('/ack', Crawler.ack.bind(Crawler));
		server.expose('/getHandler', publicFunc.getHandler);
		server.expose('/updateCategory', publicFunc.updateCategory);
		server.expose('/submitTask', publicFunc.submitTask);

		console.log('server start');
	}

	createServer();	

}());