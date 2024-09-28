import React from 'react';
import PostsList from './components/PostsList';
import AddPost from './components/AddPost';

function App() {
    return (
        <div className="App">
            <h1>Posts</h1>
            <AddPost />
            <PostsList />
        </div>
    );
}

export default App;
