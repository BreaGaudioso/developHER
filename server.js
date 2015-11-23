var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
seeder = require('mogoose-seed'),
apiRouter = express.Router(),
db = require('./models')

app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.static(_dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

app.use('/', apiRouter);

app.get('/', function(req, res) {

});

PORT = 3001;

app.listen(PORT, function() {
  console.log('this server is running');
})