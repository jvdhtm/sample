var express = require('express');
var serverless = require('serverless-http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var cons = require('consolidate');
var fs = require('fs');
var app = express();

const router = express.Router();
// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../Static')));


/* GET home page. */
router.get('*', function(req, res,next) {
	
var requesturl = req.url.replace(/\?.*/gmi,'');
	
	var url = path.join(__dirname, '../Static/Components/pages/'+requesturl) ;
	fs.exists(url, function(exists) { 
		  if (exists) { 
			 res.render('layout', { title: 'Express' });
		  }
		  else
		  {
			es.render('error', { title: 'Express' });
		  }
	}); 

});

app.use('/.netlify/functions/server', router);
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);

