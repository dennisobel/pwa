var express  = require('express');
var routes = require("./routes/routes.js");
var app      = express();
var bodyParser = require("body-parser");
var cors = require('cors');
var logger = require('morgan');
var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
//connect to mongo using mongoose

var databaseConfig = require('./config/database');

// mongoose.connect(databaseConfig.url,{useNewUrlParser: true});
// process.env.HOST = '169.239.252.209'
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(function(req,res,next){
    // var allowedOrigins = [
    //   "http://localhost:8100/",
    //   "http://localhost:3000",
    //   "https://hidden-depths-95908.herokuapp.com/",
    //   "https://hidden-depths-95908.herokuapp.com/profile",
    //   'https://hidden-depths-95908.herokuapp.com/buyspare',
    //   'https://hidden-depths-95908.herokuapp.com/bookservice',
    //   'https://hidden-depths-95908.herokuapp.com/rental',
    //   'https://s3.eu-west-2.amazonaws.com/achelis/index.html',
    //   'https://s3.eu-west-2.amazonaws.com/achelis/',
    //   'https://s3.eu-west-2.amazonaws.com',
    //   '*'
    // ];
    // var origin = req.headers.origin;
    // console.log(req.headers)
    // if(allowedOrigins.indexOf(origin) > -1){
    //     res.setHeader("Access-Control-Allow-Origin", origin);
    // }     
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    console.log(req.headers.origin)
    return next();
    
    return next();
})

app.use(express.static('www'));
app.set('port', process.env.PORT || 3000)
app.set('host', process.env.HOST || '127.0.0.1');


routes(app);

// export default app;
// module.exports.app = app
app.listen(app.get('port'),app.get('host'), () =>  console.log("Express server listening on port " + app.get('port') + "host: "+ app.get('host')))
