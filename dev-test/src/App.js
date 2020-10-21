import React from 'react';
import ApolloClient from 'apollo-boost'; 
import {ApolloProvider} from 'react-apollo'; 

//components imported and nested
import PostList from './components/PostList'; 

//apollo client setup 
//uri es el endpoint al cual se le estan haciendo requests/queries
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

//los tags de apolloclient permite que se consiga la data del endpoint del client
//y que lo pueda inyectar en el componente cuando se hagan queries 
function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>List of posts</h1>
        <h2>Tes</h2>
        <PostList/>
      </div>
    </ApolloProvider>
  );
}

export default App;
