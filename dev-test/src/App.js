import React from 'react';

//components imported and nested
import PostList from './components/PostList'; 

function App() {
  return (
    <div id="main">
      <h1>List of posts</h1>
      <PostList />
    </div>
  );
}

export default App;
