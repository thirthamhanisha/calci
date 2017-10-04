
/**
 * Module dependencies.
 */

var express = require('express') 
  , http = require('http')
  , path = require('path')
  , bodyParser = require('body-parser');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('HTML', require('ejs').renderFile);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));


var server = app.listen(3000,function(){
	console.log('server is listening');
})


app.get('/', function(req,res){
	var result = "";
	var a = "";
	var b = "";
	res.render('calc',{result: result, a: a, b: b});
});

app.post('/add', function(req,res){
	var a = parseInt(req.param("a"));
	var b = parseInt(req.param("b"));	
	var result = a + b;
	console.log(a,b,result);	
	res.render('calc.ejs', {result : result, a: a, b: b});
	
});

app.post('/sub', function(req,res){
	var a = parseInt(req.param("a"));
	var b = parseInt(req.param("b"));	
	var result = a - b;
	console.log(a,b,result);	
	res.render('calc', {result : result, a: a, b: b});
	
});

app.post('/mul', function(req,res){
	var a = parseInt(req.param("a"));
	var b = parseInt(req.param("b"));	
	var result = a * b;
	console.log(a,b,result);	
	res.render('calc', {result : result, a: a, b: b});
	
});

app.post('/div', function(req,res){
	var a = parseInt(req.param("a"));
	var b = parseInt(req.param("b"));
	if (b != 0){
	var result = a / b;
	}
	else
		{
	var result = "invalid number entered";
	}
	console.log(a,b,result);	
	res.render('calc', {result : result, a: a, b: b});
	
});

app.post('/clear', function(req,res){
		var a = "";
	var b= ""
	var result = "";
	console.log(a,b,result);	
	res.render('calc', {result : result, a: a, b: b});
	
});



