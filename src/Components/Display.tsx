import React from 'react';
const display = {
  width: '100%',
  minHeight: '100px',
  fontSize: '90px',
  fontWeight: 'bold'
}
const styleIfCountOff = {
  color: 'red',
}
const styleIfCountReset = {
  color: 'black',
}
type displayPropsType = {
  count: number
  maxCount: number
}
const Display: React.FC<displayPropsType> = (props) => {
  return (
    <div style={display}>
      <span style={props.count === props.maxCount ? styleIfCountOff : styleIfCountReset}>{props.count}</span>
    </div>
  );
};

export default Display;