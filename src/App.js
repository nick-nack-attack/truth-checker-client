import React from 'react';
import logo from './logo.svg';
import { Facts } from './features/Facts/Facts'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className='Main'>
        <Facts/>
      </main>
    </div>
  );
}

export default App;
