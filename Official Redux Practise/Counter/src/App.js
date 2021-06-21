import React from 'react';
import './App.css';
//import Shop from './components/Shop';
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement, reset} from './redux/actions/index';


function App() {
  const count = useSelector(state => state.reducer.count);
  const dispatch = useDispatch();
  console.log(count);
  
  return (
    <div className="App">
      <h1>React Redux Tutorial</h1>
      
      <h4>Count : {count}</h4>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
