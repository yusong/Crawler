
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

Crawler.push({
	urls : ['http://www.baidu.com', 'http://www.google.com.hk'],
	handler : 'baidu'
});

Crawler.pull(function(err, data) {
	if(err) {
		console.log(err);
	}
	else {
		console.dir(data);
	}
});