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

var fortunes = ['coo1','coo2','coo3','coo4'];


//路由
app.get('/',function(req,res){
	res.render('home');
});

app.get('/about',function(req,res){
	var randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
	res.render('about',{fortune: randomFortune});
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