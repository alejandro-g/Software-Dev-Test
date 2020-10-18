import React ,{Component} from 'react';
import {gql} from 'apollo-boost'; 
//binds graphql a react 
import { graphql } from 'react-apollo';

const getPostQuery = gql`
    query($id:ObjectId){
        post(id: $id){
            id
            userId
            title
            body
            user{
                name
                username
            }
        }
    }

`

class PostDetails extends Component {
    displayPostDetails(){
        const {post} = this.props.data;
        //if true
        if(post){
            return(
                <div>
                    <h2>Post Title: {post.title}</h2>
                    <p><b>Post body:</b> {post.body}</p>
                    <p><b>User's name:</b> {post.user.name}</p>
                    <p><b>User's username: </b>{post.user.username}</p>
                </div>
            )
        }else{
            return(
                <div>No post has been selected...</div>
            )
        }
    }
    render(){
        return(
            <div id="post-details">
                {this.displayPostDetails()}
            </div>         
        );
    }
}

export default graphql(getPostQuery, {options: (props) =>{
    return {
        variables: {
            id: props.postId
        }
    }
}})(PostDetails); 