import React from 'react';
import {gql} from 'apollo-boost'; 
import { graphql } from 'react-apollo';

const getPostsQuery = gql`
    {
        posts {
            Title
            User
            Username
            Body
        }
    }
`

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