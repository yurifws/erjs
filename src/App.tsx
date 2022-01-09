import React, { useState } from 'react';
import './App.css';
import Post from './components/Post';
import Sidebar from './components/Sidebar';


function App() {
  const [post, setPost] = useState({
    title: 'Titulo maneiro',
    content: 'Lorem ipsum dolot sit amet'
  })

//  setTimeout(() => {
//    setPost({
//      title: 'Titulo maneirissimo',
//      content: 'Lorem ipsum dolot sit amet 2'
//    })
//
//  }, 5000)
  return (
    <div className="App">
      <header className="App-header">
        <Sidebar post={post}/>
        <Post post={post} totalComents={12} />
        
      </header>
    </div>
  );
}

export default App;
