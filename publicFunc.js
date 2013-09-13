(function() {

	var Handler = require('handler');
	var handler = new Handler.handler();
	var Mongo = require('mongodb');

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
		},

		/**
		 * Update Category in MongoDB
		 */
		updateCategory : function(arg, callback) {
			console.log( 'i am updateCategory' );

			var client = Mongo.Db(arg.handler, new Mongo.Server(GLOBAL_CONF.mongo.host, GLOBAL_CONF.mongo.port), {fsync:true});
			
			client.open(function(err) {
				if(err) console.log('open:'+err);
				else {
					client.collection('category', function(err, coll) {
						if(err) console.log('collection:'+err);
						else {
							coll.remove(function(err, numberOfRemovedDocs) {
								coll.insert( arg.category, function(err) {
									if(err) console.log(err);
									client.close();
								});
							});						
						}	
					});
				}
			});

			callback(null, 'update category finish');
		}

	};

	exports.PublicFunc = PublicFunc;

}());