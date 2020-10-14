import React from 'react';
import ApolloClient from 'apollo-boost'; 
import {ApolloProvider} from 'react-apollo'; 

//components imported and nested
import PostList from './components/PostList'; 

//apollo client setup 
//uri es el endpoint al cual se le estan haciendo requests/queries
const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>List of posts</h1>
        <PostList/>
      </div>
    </ApolloProvider>
  );
}

export default App;
