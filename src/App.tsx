import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Post from './components/Post';


function App() {
  const [post, setPost] = useState({
    title: 'Titulo maneiro',
    content: 'Lorem ipsum dolot sit amet'
  })

  return (
    <div className="App">
      <header className="App-header">
        <Card title={"Card"}>
          <Post post={post} totalComents={12} />
        </Card>

        
      </header>
    </div>
  );
}

export default App;
