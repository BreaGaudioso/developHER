var mongoose = require('mongoose');

var companySchema = new mongoose.Schema({
  "key": String,
  "company": String,
  "team": String,
  "num_female_eng": String,
  "num_eng": String,
  "percent_female_eng": String,
  "last_updated": String,
  "submit_more_data": String,
  "github_repo": String
});

var Company = mongoose.model("Company", companySchema);

module.exports = Company;