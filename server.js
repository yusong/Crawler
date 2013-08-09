(function() {

	var http = require('http');

	var Server = function(conf) {
		var _self = this;

		_self.config = {
			host : conf.host || '127.0.0.1',
			port : conf.port || '8000'
		}

		_self.functions = {};

		_self.app = http.createServer();
		_self.app.on('request', function(request, response) {
			request.setEncoding('utf8');
			var data = '';
			var path = request.url;

			var sendResponse = function(err_or_data, statusCode) {
				response.statusCode = statusCode || 200;
				if( response.statusCode != 200 ) {
					console.log('statusCode: ' + statusCode);console.log(err_or_data);
					response.write(''+err_or_data, 'utf8');
					response.end();
				} else if( err_or_data ) {
					console.log('statusCode: ' + statusCode);console.log(err_or_data);
					response.write(JSON.stringify(err_or_data), 'utf8');
					response.end();
				} else {
					console.log('statusCode: null');console.log(err_or_data);
					response.end();
				}
			};

			request.on('data', function(chunk){
				data += chunk;
			});
			
			request.on('end', function(){
				if( request.url == '/favicon.ico' ) {
					sendResponse('favicon.ico', 200);
				} else {
					var dataObj = null;
					try { 
						dataObj = ( data != null && data != '' ) ? JSON.parse(data) : JSON.parse('{}');
					} catch(e) { sendResponse(e, 500); }

					if( _self.functions[path] ) {
						try {
							_self.functions[path](dataObj, function(err, data){
								if(err) sendResponse(err, 500);
								else if(data) sendResponse(data, 200);
								else sendResponse();
							});
						} catch(e) { sendResponse(e, 500); }
					} else { 
						sendResponse(); 
					}
				}				
			});
		});
		_self.app.listen( _self.config.port );
	};

	Server.prototype.expose = function(path, func) {
		this.functions[path] = func;
	};

	exports.Server = Server;

}());