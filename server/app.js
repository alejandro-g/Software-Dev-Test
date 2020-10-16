const express = require('express'); 
const graphqlHTTP = require('express-graphql').graphqlHTTP; //permite que la aplicacion pueda interactuar y funcionar con graphql 
const schema = require('./schema/schema'); 
const cors = require('cors'); 
const mongoose = require('mongoose'); 

const app = express();  

//permitir cross-origin requests
app.use(cors()); 

mongoose.connect('mongodb+srv://sledge:test123@test.14c2m.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology:true}); 
mongoose.connection.once('open', () =>{
    console.log("connected to db"); 
});

app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql: true
}))

app.listen(4000,() =>{
    console.log('now listening for requests on port 4000'); 
})