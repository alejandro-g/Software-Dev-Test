const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const postSchema = new Schema ({
  title: String, 
  body: String, 
  userID: String
}); 

module.exports = mongoose.model('Post', postSchema); 