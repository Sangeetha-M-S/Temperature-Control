import React,{useState} from 'react';
import './App.css';

const App = () => {

  const[TempVal,setTempVal] = useState(10);
  const[TempColor,setTempColor] = useState('cold');

  const increase = () => {
    const newTemp = TempVal + 1;

    if(newTemp>=15){
      setTempColor('hot');
    }

    setTempVal(newTemp);
  }

  const decrease = () => {
    const newTemp = TempVal - 1;

    if(newTemp<15){
      setTempColor('cold');
    }

    setTempVal(newTemp);
  }

  return(
    <div className="App-container">
      <div className={`temp-display ${TempColor}`}>{TempVal}oC</div>
        <div>
          <button onClick={() => increase()} className="btn1">+</button>
          <button onClick={() => decrease()} className="btn2">-</button>
        </div>
      </div>
  )
}

export default App;
