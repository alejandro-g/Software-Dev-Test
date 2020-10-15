/*el schema describe la data que está en el grafo, sus object types, relaciones 
entre object types y como se puede interactuar con el grafo como tal*/

const graphql = require('graphql');
const _ = require('lodash'); 

//different properties from the graphql package
const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID} = graphql; 

//dummy data

var posts = [
    {title: 'Hello', user: 'Erick', username:'chief', body: 'asjkajaa', id: '1'},
    {title: 'Goodbye', user: 'Matt', username:'master', body: 'qwerty', id: '2'},
    {title: 'Food', user: 'Stonie', username:'cart', body: 'aadasas', id: '3'}, 
]

//definiendo como se "verá" el objeto dentro del grafo
//los fields se hacen wrap en una funcion para que si existen types 
//variados, entonces se puede prevenir errores de referencia 
const PostType = new GraphQLObjectType ({
    name: 'Post',
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        user: {type: GraphQLString}, 
        username: {type: GraphQLString}, 
        body: {type: GraphQLString}
    })
}); 

//el rootquery sirve para que el front end pueda ingresar al graph con el query que el usuario introduzca.
//Pidiendo como argumentos el id del post que quiere encontrar
const RootQuery = new GraphQLObjectType ({
    name: 'RootQueryType', 
    fields: {
        post: {
            type: PostType, 
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                //code to get data from db/other source
                return _.find(posts, {id: args.id}); 
            }
        }
    }
}); 

module.exports = new GraphQLSchema ({
    query: RootQuery
}); 
