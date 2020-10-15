const express = require('express'); 
const graphqlHTTP = require('express-graphql').graphqlHTTP; //permite que la aplicacion pueda interactuar y funcionar con graphql 
const schema = require('./schema/schema'); 

const app = express();  

app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql: true
}))

app.listen(4000,() =>{
    console.log('now listening for requests on port 4000'); 
})