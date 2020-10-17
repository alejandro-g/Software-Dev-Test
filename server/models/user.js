const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const ObjectID = require('graphql-scalar-objectid'); 

const userSchema = new Schema ({
  name: String, 
  username: String,
  id: String,
  _id: ObjectID
}); 

module.exports = mongoose.model('User', userSchema); 