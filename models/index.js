var mongoose = require('mongoose');
mongoose.createConnection('mongodb://local-host/db-company');
mongoose.set("debug", true);
module.exports.Company = require("./company");


var seeder = require('mongoose-seed');
seeder.connect('mongodb://localhost/company-db', function() {
  seeder.loadModels(['./models/company.js']);
  seeder.clearModels(['Company'], function() {
    seeder.populateModels(data);
  });
});

var data =[{'model': 'Company','documents': [
             {
                "FIELD1":"wellsfargo",
                "FIELD2":"Wells Fargo",
                "FIELD3":"N/A",
                "FIELD4":"1296",
                "FIELD5":"5407",
                "FIELD6":"23.97",
                "FIELD7":"7/22/2015",
                "FIELD8":"",
                "FIELD9":""
              }]
          }];