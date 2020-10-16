/*el schema describe la data que está en el grafo, sus object types, relaciones 
entre object types y como se puede interactuar con el grafo como tal*/

const graphql = require('graphql');
const _ = require('lodash'); 

//different properties from the graphql package
const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID} = graphql; 

//dummy data

var posts = [
    {title: 'Hello', body: 'asjkajaa', userID: '2', id: '1', userID: '1'},
    {title: 'Goodbye', body: 'qwerty', userID: '3', id: '2', userID: '2'},
    {title: 'Food', body: 'aadasas', userID: '4', id: '3', userID: '3'}, 
]

var users = [
    {name: "Leanne Graham", userName: "Bert", id: '1'}, 
    {name: "Ervin Howell", userName: "Antonette", id: '2'},
    {name: "Clementine Bauch", userName: "Samantha", id: '3'},
]

//definiendo como se "verá" el objeto dentro del grafo
//los fields se hacen wrap en una funcion para que si existen dependencias de untipo a otro
//entonces no exista un error  
const PostType = new GraphQLObjectType ({
    name: 'Post',
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        body: {type: GraphQLString},
        user: {
            type: UserType,
            resolve(parent, args){
                return _.find(users, {id: parent.userID});
            }
        }
    })
}); 

const UserType = new GraphQLObjectType ({
    name: 'User',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        userName: {type: GraphQLString}
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
        },
        user: {
            type: UserType,
            args: {id: {type: GraphQLID}}, 
            resolve(parent, args){
                return _.find(users, {id: args.id}); 
            }
        }
    }
}); 

module.exports = new GraphQLSchema ({
    query: RootQuery
}); 
