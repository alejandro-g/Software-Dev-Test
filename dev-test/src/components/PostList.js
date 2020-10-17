import React ,{Component} from 'react';
import {gql} from 'apollo-boost'; 
//binds graphql a react 
import { graphql } from 'react-apollo';

const getPostsQuery = gql`
{
    posts{
      id
      title
      body
      userId
      user{
        name
        username
      }
    }
  }
`
class PostList extends Component {
    displayPosts(){
        var data = this.props.data; 
        if(data.loading){
            return <div>Loading Posts...</div>
        }else{
            return data.posts.map(post =>{
                return(
                    <li key={post.id}>{post.title}</li>
                )
            })
        }
    }
    render(){
        return(
            <div>
                <ul id="post-list">
                    { this.displayPosts() }
                </ul>
            </div>
        );
    }
}

export default graphql(getPostsQuery)(PostList); 