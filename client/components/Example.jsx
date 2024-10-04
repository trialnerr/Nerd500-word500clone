import React from 'react'; 

const Example = ({ colorValueObj }) => {
  console.log({colorValueObj}); 
  let coloredButtons = []; 
  const colorsObj = {
    green: '#9cec9c',
    yellow: '#e9ba3a',
    red: '#f17f7f',
  }; 
 
  for (let color in colorValueObj) {
    coloredButtons.push(
      <button
        key={color}
        style={{ backgroundColor: colorsObj[color] }}
        className='exampleBtn'
      >{ colorValueObj[color] }</button>
    );

  }

  
  return (
    <>
      {coloredButtons}
    </>
  );
};

export default Example; 
