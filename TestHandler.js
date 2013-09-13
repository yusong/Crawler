
var Crawler = require('crawler');
// var crawler = Crawler.Crawler();
Crawler = new Crawler.Crawler();


var mongo = require('mongodb');

// var data = {tasks : [{
// 	urls : ['http://channel.jd.com/kitchenware.html'],
// 	handler : 'jingdong'
// }]
// };

// var data = {tasks : [{
// 	urls : ['http://www.tmall.com/'],
// 	handler : 'tmall'
// }]
// };

var data = {tasks : [{
	urls : ['http://list.jd.com/652-829-848.html'],
	handler : 'jingdong'
}]
};

// var data = {tasks : [{
// 	urls : ['http://list.jd.com/652-654-831.html'],
// 	// urls : ['http://item.jd.com/706334.html'],
// 	handler : 'jingdong'
// }, {
// 	urls : ['http://list.tmall.com'],
// 	handler : 'tmall'
// }, {
// 	urls : ['http://list.tmall.com'],
// 	handler : 'tmall'
// }, {
// 	urls : ['http://list.tmall.com'],
// 	handler : 'tmall'
// }]
// };

// var data = {tasks : [{
// 	urls : ['http://list.jd.com/6196-6197-6199-0-0-0-0-0-0-0-1-1-49-1.html'],
// 	handler : 'jingdong'
// }]
// };

// var data = {tasks : [{
// 	urls : ['http://www.baidu.com', 'http://www.google.com.hk'],
// 	handler : 'jingdong'
// }, {
// 	urls : ['http://www.tmall.com', 'http://www.jd.com'],
// 	handler : 'jingdong'
// }]
// };

var client = mongo.Db('tasks', new mongo.Server('127.0.0.1', '27017'), {fsync:true});
			client.open(function() {
				client.collection('tasks', function(err, collection){
					for( var i = 0 ; i < 1; i++ ){
										collection.insert(data, function(err) {
											// ### How to Save, Every and Queue ###
											console.log('insert, finish');
											client.close();
										});
					}
				});
			});

