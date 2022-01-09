
import React from 'react';
import './App.css';

function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  e.preventDefault()
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <form action="/test">
          <button onClick={handleClick}>
            Clique em mim
          </button>

        </form>
      </header>
    </div>
  );
}

export default App;
