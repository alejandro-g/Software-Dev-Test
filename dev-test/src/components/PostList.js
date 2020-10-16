import React from 'react';
import {gql} from 'apollo-boost'; 
//binds graphql a react 
import { graphql } from 'react-apollo';

const getPostsQuery = gql`
    {
        post {
            title
            body
        }
    }
`; 

function PostList() {
  return (
    <div id="main">
        <ul id="post-list">
            <li>Post</li>
        </ul>
    </div>
  );
}

export default graphql(getPostsQuery)(PostList); 