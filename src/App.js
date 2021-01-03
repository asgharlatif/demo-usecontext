import logo from './logo.svg';
import './App.css';
import Parent from './Parent'
import { useState } from 'react';
import ValueContext from './ValueContext';

function App() {

  let value = 1500;

  return (
    <ValueContext.Provider value={value}>
    <div>
        Hello World 
        <Parent ></Parent>        
    </div>
    </ValueContext.Provider>
  );
}

export default App;
