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
    render(){
        console.log(this.props); 
        return(
            <div>
                <ul id="post-list">
                    <li>Post List</li>
                </ul>
            </div>
        );
    }
}

export default graphql(getPostsQuery)(PostList); 