import React, { useEffect, useState } from 'react'

function Timer() {

    const [totalSeconds, setTotalSeconds] = useState(7200);
    const [timerRunning, setTimerRunning] = useState(false);

    
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    useEffect(() => {
        let timer;
        if (timerRunning && totalSeconds > 0) {
            timer = setTimeout(() => {
                setTotalSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        }
        
        
        return () => clearTimeout(timer);
    }, [totalSeconds, timerRunning]);
    const handleClick = () => {
        
        setTimerRunning(prevState => !prevState);
    };

    
   
  return (
    <div>
        <h1>Timer {hours}:{minutes}:{seconds}</h1>
        <button onClick={handleClick}>{timerRunning ? 'Pause' : 'Start'}</button>
    </div>
  )
}

export default Timer