var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
seeder = require('mongoose-seed'),
apiRouter = express.Router(),
fs = require('fs'),
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
    if (error) return res.json({message: "there was an error", error: error});
    res.json(response);
  });
})

.post(function(req, res) {
  console.log(req);
  var company = db.Company.create(
  {
    key: req.body.company,
    company:req.body.company,
    team: req.body.team,
    num_femal_eng: req.body.num_female_eng,
    num_eng: req.body.num_eng,
    percent_femail_end: req.body.percent_femail_eng,
    last_updated: req.body.last_updated,
    submit_more_data: req.body.submit_more_data,
    github_repo: req.body.github_repo
  }, function(error, response) {
    if(error) return res.json({message: "there was an error", error: error })
    res.json({ message: "new record sucessfully created", response: response })
  });
});

app.use('/', apiRouter);

app.get('/', function(req,res){
  res.render('index.ejs');
});

app.listen(3000, function() {
  console.log('this server is running');
});
