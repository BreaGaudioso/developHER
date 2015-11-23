// function that will update the key names in our JSON file
// TODO: figure out how to update and save the JSON file.
function updateJSON(file) {
  for ( var i =0; i < file.length; i++ ) {
    file[i].key = file[i].FIELD1;
    file[i].company = file[i].FIELD2;
    file[i].team = file[i].FIELD3;
    file[i].num_female_eng = file[i].FIELD4;
    file[i].num_eng = file[i].FIELD5;
    file[i].percent_femaile_eng = file[i].FIELD6;
    file[i].last_updated = file[i].FIELD7;
    file[i].submit_more_data = file[i].FIELD8;
    file[i].github_repo = file[i].FIELD9;
    delete file[i].FIELD1;
    delete file[i].FIELD2;
    delete file[i].FIELD3;
    delete file[i].FIELD4;
    delete file[i].FIELD5;
    delete file[i].FIELD6;
    delete file[i].FIELD7;
    delete file[i].FIELD8;
    delete file[i].FIELD9;
  }
}
