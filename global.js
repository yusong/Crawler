(function(){

	var module = 'test';

	if( module == 'test' ) {

		GLOBAL_CONF = {
			mongo : {
				host : '127.0.0.1',
				port : '27017'
			},
			redis : {
				host : '127.0.0.1',
				port : '6379'
			},
			server : {
				host : '127.0.0.1',
				port : '8000'
			}
		}

	}
	else if( module == 'prd' ) {

		GLOBAL_CONF = {
			mongo : {
				host : '127.0.0.1',
				port : '27017'
			},
			redis : {
				host : '127.0.0.1',
				port : '6379'
			},
			server : {
				host : '127.0.0.1',
				port : '8000'
			}
		}

	}

}());