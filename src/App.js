import React from 'react'
import './App.css';
import Pin from './Components/pin';

function App() {
  return (
    <div className="App">
      <h1>Pin Component</h1>
      <Pin length={4} />
    </div>
  );
}

export default App;
