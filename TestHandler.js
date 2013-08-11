
var Crawler = require('Crawler');
// var crawler = Crawler.Crawler();
Crawler = new Crawler.Crawler();

// var tasks = [{
// 	handler : 'baidu',
// 	results : [
// 		{
// 			name:'yusong',
// 			info:123
// 		},
// 		{
// 			name:'m2c',
// 			info:'china'
// 		}
// 	]
// }];

// Crawler.ack(tasks, function(){
// 	console.log('ack finish');
// });

// var Handler = require('handler');
// var handler = new Handler.handler();

// handler.baidu('hello world', function(){});
// handler.baidu('hello world2', function(){});

var mongo = require('mongodb');
var data = {tasks : [{
	urls : ['http://www.baidu.com', 'http://www.google.com.hk'],
	handler : 'jingdong'
}, {
	urls : ['http://www.tmall.com', 'http://www.jd.com'],
	handler : 'jingdong'
}]
};
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

// Crawler.push({
// 	urls : ['http://www.baidu.com', 'http://www.google.com.hk'],
// 	handler : 'baidu'
// });

// Crawler.push({
// 	urls : ['http://www.baidu.com', 'http://www.google.com.hk'],
// 	handler : 'baidu'
// });

// Crawler.push({
// 	urls : ['http://www.baidu.com', 'http://www.google.com.hk'],
// 	handler : 'baidu'
// });

// Crawler.pull(function(err, data) {
// 	if(err) {
// 		console.log(err);
// 	}
// 	else {
// 		console.dir(data);
// 	}
// });

// Crawler.pull(function(err, data) {
// 	if(err) {
// 		console.log(err);
// 	}
// 	else {
// 		console.dir(data);
// 	}
// });
