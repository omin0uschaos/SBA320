import './Timer.css'

import { useState, useEffect } from 'react';

function Timer() {
  const initialTime = 15 * 60;
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const startStopTimer = () => {
    setIsActive(prev => !prev);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(initialTime);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="countdown-timer">
            <div className="box-canvas">
    <div className="frame">
      <div className="top"></div>
      <div className="bottom">
        <div className="drip"></div>
        <div className="blob"></div>
        <div className="glass"></div>
      </div>
      
     </div>
  </div>
      <div className="timer">
        <span>{formatTime(time)}</span>
      </div>
      <div className="timerButtons">
        <button onClick={startStopTimer}>{isActive ? 'Stop' : 'Start'}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
