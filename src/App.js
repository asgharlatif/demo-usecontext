import logo from './logo.svg';
import './App.css';
import Parent from './Parent'
import { useState } from 'react';

function App() {

  let [number,setNumber] = useState(45);

  return (
    <div>
        Hello World {number}
        <Parent num={number} ></Parent>
        <button onClick={()=>setNumber(++number)} >Update number</button>
    </div>
  );
}

export default App;
