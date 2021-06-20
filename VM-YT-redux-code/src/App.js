import React from 'react';
import './App.css';
//import Shop from './components/Shop';
import {useSelector} from 'react-redux'

function App() {
  const state = useSelector(state => state.rootReducer);
  console.log(state);
  
  return (
    <div className="App">
      <h1>React Redux Tutorial</h1>
      
    </div>
  );
}

export default App;
