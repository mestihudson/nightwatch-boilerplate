import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Emprestei</h1>
        <ul>
          <li><a>Usuários</a></li>
          <li><a>Livros</a></li>
          <li><a>Empréstimos</a></li>
        </ul>
      </div>
    );
  }
}

export default App;
