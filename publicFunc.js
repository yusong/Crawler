(function() {

	var Handler = require('handler');
	var handler = new Handler.handler();

	var PublicFunc = {

		/**
		 * Return Business Handlers to Client
		 */
		getHandler : function(arg, callback) {
			var results = [];
			for( var i in handler ){
		        results.push( i );
		    } 
		    callback(null, results);
		}

	};

	exports.PublicFunc = PublicFunc;

}());