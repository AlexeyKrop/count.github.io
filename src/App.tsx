import React, {useEffect, useState} from 'react';
import './App.css';
import Display from "./Components/Display";
import Button from "./Components/Button";
import SetDisplay from "./Components/SetDisplay";

function App() {
  const [startValue, setStartValue] = useState(0)
  const [maxValue, setMaxValue] = useState(0)
  let [count, setCount] = useState(startValue);
  let [error, setError] = useState('')
  let [disabled, setDisabled] = useState(true)
  useEffect(() => {
    let startValueForString = localStorage.getItem('startValue')
    if (startValueForString) {
      let newStartValue = JSON.parse(startValueForString)
      setStartValue(newStartValue)
    }
  }, [])
  useEffect(() => {
    let maxValueForString = localStorage.getItem('maxValue')
    if (maxValueForString) {
      let newMaxValue = JSON.parse(maxValueForString)
      setMaxValue(newMaxValue)
    }
  }, [])
  const getStartValue = (value: number) => {
    if (value >= 0) {
      setStartValue(value)
      setError('')
    } else {
      setError('StartValue not valid')
    }
  }
  const getMaxValue = (value: number) => {
    if (value >= 0) {
      setMaxValue(value)
      setError('')
    } else {
      setError('MaxValue not valid')
    }
  }
  const getCounterIncrement = () => {
    setCount(++count);
    if (count === maxValue) {
      console.log(count)
      setDisabled(true)
      // count = startValue;
      // setCount(count);
    }
  }
  const getResetICount = () => {
    setDisabled(false)
    setCount(startValue);
  }
  const onClickSetValue = () => {
    setDisabled(false)
    // if(count === maxValue || maxValue < startValue){
    //   setDisabled(false)
    // }
    if (startValue < maxValue) {
      localStorage.setItem('startValue', JSON.stringify(startValue))
      localStorage.setItem('maxValue', JSON.stringify(maxValue))
      setCount(startValue)
    }
  }
  const checkValue = () => {
    if(maxValue < startValue){
      setError('startValue is not valid')
    }
  }
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper-counter">
          <Display error={error} maxCount={maxValue} count={count}/>
          <div className="button__group">
            {/*count === maxValue || maxValue < startValue*/}
            <Button disabled={disabled} name={'Inc'} callBack={getCounterIncrement}/>
            <Button disabled={count === startValue || maxValue < startValue} name={'Reset'} callBack={getResetICount}/>
          </div>
        </div>
        <div className="wrapper-counter wrapper-counter__setting">
          <SetDisplay maxValue={maxValue} startValue={startValue} getStartValue={getStartValue}
                      getMaxValue={getMaxValue}
                      checkValue={checkValue}/>
          <div className="button__group button__group_settings">
            <Button disabled={startValue >= maxValue} name={'Set'} callBack={onClickSetValue}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
