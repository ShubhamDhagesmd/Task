import React, { useState, useEffect } from 'react';

function TimerApp() {
  const [workTime, setWorkTime] = useState(25 * 60); // 25 minutes in seconds
  const [breakTime, setBreakTime] = useState(5 * 60); // 5 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        // Decrement the timer
        if (workTime > 0) {
          setWorkTime(workTime - 1);
        } else if (breakTime > 0) {
          setBreakTime(breakTime - 1);
        } else {
          // Timer is complete, reset it
          setIsActive(false);
          setWorkTime(25 * 60);
          setBreakTime(5 * 60);
        }
      }, 1000); // Update every second
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, workTime, breakTime]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setWorkTime(25 * 60);
    setBreakTime(5 * 60);
  };

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <div>
        <h2>Work Timer: {Math.floor(workTime / 60)}:{(workTime % 60).toString().padStart(2, '0')}</h2>
        <h2>Break Timer: {Math.floor(breakTime / 60)}:{(breakTime % 60).toString().padStart(2, '0')}</h2>
        <button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default TimerApp;
