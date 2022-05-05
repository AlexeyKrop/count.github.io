import React from 'react';
import Input from "./Input";

const displaySettings = {
  width: '90%',
  minHeight: '126px',
  margin: "0 auto",
  border: '4px solid grey',
}
type setDisplayProps = {
  getStartValue: (value: number) => void
  getMaxValue: (value: number) => void
  checkValue: () => void
  startValue: number
  maxValue: number
}
const SetDisplay = (props: setDisplayProps) => {
  return (
    <div style={displaySettings}>
      <div className='counter__settings'><span>max value:</span> <Input  checkValue={props.checkValue} className={props.startValue >= props.maxValue  ? 'inputError': ''} value={props.maxValue}  callBack={props.getMaxValue} type={'text'}/>
      </div>
      <div className='counter__settings'><span>start value:</span>
        <Input className={props.startValue >= props.maxValue  ? 'inputError': ''}  value={props.startValue} callBack={props.getStartValue } checkValue={props.checkValue} type={'text'}/>
      </div>
    </div>
  );
};

export default SetDisplay;