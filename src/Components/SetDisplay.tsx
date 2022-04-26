import React from 'react';
const displaySettings = {
  width: '90%',
  minHeight: '126px',
  margin: "0 auto",
  border: '4px solid grey',
}
const SetDisplay = () => {
  return (
    <div style={displaySettings}>
      <div className='counter__settings'><span>max value:</span> <input type="text"/></div>
      <div className='counter__settings'><span>start value:</span> <input type="text"/></div>
    </div>
  );
};

export default SetDisplay;