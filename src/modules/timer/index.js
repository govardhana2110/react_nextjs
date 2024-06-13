
import React, { useState, useRef } from 'react';
import './style.css';

export default function App() {
  const [timer, setTimer] = useState(10);
  let timerInterval = useRef(null);

  const onButtonClick = (type) => {
    if (type === 'reset') {
      clearInterval(timerInterval.current);
      timerInterval.current = null;
      setTimer(10);
    } else if (type === 'pause') {
      clearInterval(timerInterval.current);
      timerInterval.current = null;
    } else if (type === 'start') {
      if (timerInterval.current != null) return;
      timerInterval.current = setInterval(() => {
        setTimer((prev) => {
          if (prev === 0) {
            return 10; // Reset timer to its initial value when it reaches 0
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  return (
    <div>
      <button onClick={() => onButtonClick('start')}>Start</button>
      <button onClick={() => onButtonClick('pause')}>Pause</button>
      <button onClick={() => onButtonClick('reset')}>Reset</button>
      <div>{timer}</div>
    </div>
  );
}
