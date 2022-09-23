import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(true);

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return function cleanup(){
      clearInterval(timerID)
    }
  }, []);

  return <div>{time.toString()}</div>
}

export default Clock;
