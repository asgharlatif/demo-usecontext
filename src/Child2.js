import React, { useContext,useReducer } from 'react';
import numberReducer from './numberReducer';

function Child2() {
 
  let [state,dispatch] = useReducer(numberReducer,58)

  return (
    <div>
        Child 2 - This Value is coming using useReducer  {state}     
        <button onClick ={()=>{ dispatch({type:"INCREMENT",Val:100}) }} >INCREMENT using useReducer</button>
        <button onClick ={()=>{ dispatch({type:"DECREMENT",Val:50}) }} >DECREMENT using useReducer</button>
    </div>
  );
}

export default Child2;
