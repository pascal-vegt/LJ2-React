import "./App.css";
import React from 'react';
import Clock from './components/Clock.jsx'; // Het juiste pad naar Clock.jsx

function App() {
  return (
    <div className="App">
      <h1>React Clock</h1>
      <Clock />
    </div>
  );
}

export default App;