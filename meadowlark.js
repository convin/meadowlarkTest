var express = require('express');
var app = express();
app.set('port',process.env.PORT || 3000);

//引入视图引擎
var handlebars = require('express3-handlebars')
	.create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');


//设置静态资源
app.use(express.static(__dirname + '/public'));

var fortunes = require('./lib/fortune.js');

//
app.use(function(req,res,next){
	res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
	next();
});

//路由
app.get('/',function(req,res){
	res.render('home');
});

app.get('/about',function(req,res){
	res.render('about',{
		fortune: fortunes.getFortune(),
		pageTestScript:'/qa/tests-about.js'
	});
});

app.get('/tours/hood-river',function(req,res){
	res.render('tours/hood-river');
});

app.get('/tours/request-group-rate',function(req,res){
	res.render('tours/request-group-rate');
});

app.use(function(req,res,next){
	res.status(400);
	res.render('400');
});

app.use(function(err,req,res,next){
	console.log(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'),function(){
	console.log('express on port:'+app.get('port'));
});