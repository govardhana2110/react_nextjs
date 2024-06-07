import React, { useEffect } from 'react';
import './style.css';

export default function App() {
  let str1 = 'acer';
  let str2 = 'race';
  const checkFunction = () => {
    let splitStr1 = str1.split('').sort().join('');
    let splitStr2 = str2.split('').sort().join('');
    if (splitStr1 === splitStr2) {
      console.log(splitStr1, splitStr2, 'same');
    } else {
      console.log('Diffrent');
    }
  };
  useEffect(() => {
    checkFunction();
  }, []);
  return (
    <div>
      <h1 style={{ boxShadow: '1px 2px 30px 0.5px',borderRadius:'3%' }}>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
