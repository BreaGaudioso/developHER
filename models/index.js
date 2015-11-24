var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/db-company');
mongoose.set("debug", true);
module.exports.Company = require("./company");


// var seeder = require('mongoose-seed');
// seeder.connect('mongodb://localhost/company-db', function() {
//   seeder.loadModels(['./models/company.js']);
//   seeder.clearModels(['Company'], function() {
//     console.log("I'm here");
//     seeder.populateModels('data.json');
//   });
// });
