/*el schema describe la data que está en el grafo, sus object types, relaciones 
entre object types y como se puede interactuar con el grafo como tal*/

const graphql = require('graphql');
const { toNumber } = require('lodash');
const _ = require('lodash'); 

const Post = require('../models/post');
const User = require('../models/user');

const ObjectID = require('graphql-scalar-objectid'); 

//different properties from the graphql package
const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList, GraphQLInt} = graphql; 

//definiendo como se "verá" el objeto dentro del grafo
//los fields se hacen wrap en una funcion para que si existen dependencias de untipo a otro
//entonces no exista un error  
const PostType = new GraphQLObjectType ({
    name: 'Post',
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        body: {type: GraphQLString},
        userId: {type: ObjectID},
        user: {
            type: UserType,
            resolve(parent, args){
                console.log(parent); 
                return User.findOne({userId: args.id}); 
            }
        }
    })
}); 

const UserType = new GraphQLObjectType ({
    name: 'User',
    fields: () => ({
        id: {type: ObjectID},
        name: {type: GraphQLString},
        username: {type: GraphQLString},

    })
}); 


//el rootquery sirve para que el front end pueda ingresar al graph con el query que el usuario introduzca.
//Pidiendo como argumentos el id del post que quiere encontrar
//Asimismo, se puede hacer un query para todos los posts o users
const RootQuery = new GraphQLObjectType ({
    name: 'RootQueryType', 
    fields: {
        post: {
            type: PostType, 
            args: {id: {type: ObjectID}},
            resolve(parent, args){
                return Post.findById(args.id); 
            }
        },
        user: {
            type: UserType,
            args: {id: {type: ObjectID}}, 
            resolve(parent, args){
                console.log('args', args);
                //return _.find(users, {id: args.id});
                return User.findOne({userId: args.id}); 
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args){
                //return posts
                return Post.find({}); //retorna todos los elementos
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
               // return users
               return User.find({}); 
            }
        }
    }
}); 

//setting up mutations, le permite al usuario poder agregar posts/users a la db
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType, 
            args: {
                name: {type: GraphQLString },
                username: {type: GraphQLString }
            }, 
            resolve(parent, args){
                let user = new User({
                    name: args.name,
                    username: args.username
                }); 
                return user.save(); 
            }
        },
        addPost: {
            type: PostType,
            args: {
                title: { type: GraphQLString },
                body: { type: GraphQLString }, 
                userId: { type: GraphQLID }, 
                id: { type: GraphQLID }
            },
            resolve(parent, args){
                let post = new Post({
                    title: args.title, 
                    body: args.body, 
                    userId: args.userId,  
                    id: args.id 
                });
                return post.save(); 
            }
        }
    }
})

module.exports = new GraphQLSchema ({
    query: RootQuery,
    mutation: Mutation
}); 
