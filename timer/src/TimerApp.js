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
    <div class="flex flex-col items-center justify-center min-h-screen bg-white">
  <h1 class="text-4xl font-semibold mb-6">Pomodoro Timer</h1>
  <div class="flex items-center space-x-4">
    <div class="text-center">
      <h2 class="text-2xl font-semibold">Work Timer</h2>
      <p class="text-3xl font-bold">
        {Math.floor(workTime / 60)}:{(workTime % 60).toString().padStart(2, '0')}
      </p>
    </div>
    <div class="text-center">
      <h2 class="text-2xl font-semibold">Break Timer</h2>
      <p class="text-3xl font-bold">
        {Math.floor(breakTime / 60)}:{(breakTime % 60).toString().padStart(2, '0')}
      </p>
    </div>
  </div>
  <div class="mt-6 flex justify-center space-x-4">
    <button
      class="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold focus:outline-none"
      onClick={toggleTimer}
    >
      {isActive ? 'Pause' : 'Start'}
    </button>
    <button
      class="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold focus:outline-none"
      onClick={resetTimer}
    >
      Reset
    </button>
  </div>
</div>


  );
}

export default TimerApp;
