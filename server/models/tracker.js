// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var trackerSchema = new Schema({
  name: {
      type:String,
      required:true,
      unique:true,
      index:true
  },
  location:String,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Tracker = mongoose.model('Tracker', trackerSchema);

// make this available to our users in our Node applications
module.exports = Tracker;