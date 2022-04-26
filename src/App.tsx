import React, {useState} from 'react';
import './App.css';
import Display from "./Components/Display";
import Button from "./Components/Button";
import SetDisplay from "./Components/SetDisplay";

function App() {
  const maxCount = 5;
  const minCount = 0;
  let [count, setCount] = useState(minCount);
  const [startValue, setStartValue] = useState(0)
  const [maxValue, setMaxValue] = useState(0)
  const getStartValue = (value: number) => {
    setStartValue(value)
  }
  const getMaxValue = (value: number) => {
    setMaxValue(value)
  }
  const getCounterIncrement = () => {
    if (count === maxCount) {
      count = 0;
      setCount(count);
    }
    setCount(++count);
  }
  const getResetICount = () => {
    setCount(0);
  }
  const onClickSetValue = () => {
    setCount(startValue)
  }
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper-counter">
          <Display maxCount={maxCount} count={count}/>
          <div className="button__group">
            <Button disabled={count === maxCount} name={'Inc'} callBack={getCounterIncrement}/>
            <Button disabled={count === minCount} name={'Reset'} callBack={getResetICount}/>
          </div>
        </div>
        <div className="wrapper-counter wrapper-counter__setting">
          <SetDisplay getStartValue={getStartValue} getMaxValue={getMaxValue}/>
          <div className="button__group button__group_settings">
            <Button name={'Set'} callBack={onClickSetValue}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
