import React from 'react';
import logo from './logo.svg';
import './App.css';

const Componet = React.createElement('div', {style: {background: 'red'}}, 'Olá mundo')

const HTMLElement = document.createElement('div')
HTMLElement.style.background = 'red'
HTMLElement.innerText = 'OLÁ MUNDO'

console.log(Componet)
console.dir(HTMLElement)


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Componet }
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá mundo!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
