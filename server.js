var express = require('express')
app = express(),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
seeder = require('mongoose-seed'),
apiRouter = express.Router(),
db = require('./models')

app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

apiRouter.route('/companies')
.get(function(req,res){
  db.Company.find({},function (error,response){
    console.log(error);
    console.log(response);
    res.json(response);
  })
})

app.use('/', apiRouter);

app.get('/', function(req,res){
  res.render('index.ejs');
});

app.listen(3000, function() {
  console.log('this server is running');
});