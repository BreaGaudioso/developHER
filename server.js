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
  var company = new Company();

  company.name = req.body.company;
  company.team = req.body.team;
  company.num_femal_eng = req.body.num_female_eng;
  company.num_eng = req.body.num_eng;
  company.percent_femail_end = req.body.percent_femail_eng;
  company.submit_more_data = req.body.submit_more_data;

  company.save(function(error) {
    if(error) return res.json({message: "there was an error", error: error })

    res.json({ message: "new record sucessfully created" })
  });
});

app.use('/', apiRouter);

app.get('/', function(req,res){
  res.render('index.ejs');
});

app.listen(3000, function() {
  console.log('this server is running');
});
