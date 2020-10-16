const express = require('express'); 
const graphqlHTTP = require('express-graphql').graphqlHTTP; //permite que la aplicacion pueda interactuar y funcionar con graphql 
const schema = require('./schema/schema'); 
const cors = require('cors'); 

const app = express();  

//permitir cross-origin requests
app.use(cors()); 

app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql: true
}))

app.listen(4000,() =>{
    console.log('now listening for requests on port 4000'); 
})