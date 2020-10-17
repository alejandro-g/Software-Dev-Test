const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const ObjectID = require('graphql-scalar-objectid'); 

const postSchema = new Schema ({
  title: String, 
  body: String, 
  userId: Number,
  _id: ObjectID
}); 

module.exports = mongoose.model('Post', postSchema); 