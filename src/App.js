import './App.css';
import Parent from './Parent'
import { useReducer, useState } from 'react';
import ValueContext from './ValueContext';

function App() {

  let value = useState(480);

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
