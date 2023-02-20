import React, { useState, useEffect } from "react";
import getNextBirthdayTime from "../utils/timeleft";

export const Timer = ({ birthday }) => {
  const [timeLeft, setTimeLeft] = useState(getNextBirthdayTime(birthday));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getNextBirthdayTime(birthday));
    }, 1);

    return () => clearInterval(intervalId);
  }, [birthday]);

  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutesLeft = Math.floor((timeLeft / (1000 * 60)) % 60);
  const secondsLeft = Math.floor((timeLeft / 1000) % 60);

  return (<div>    
      {timeLeft !== 0 && <div className="text-center">
        <h2>Countdown to next birthday:</h2>
        <p><b>
          {daysLeft} days, {hoursLeft} hours, {minutesLeft} minutes, {secondsLeft} seconds
        </b></p>
      </div>}
      {timeLeft === 0 && <div className="text-center">
        <h1>TODAY IT'S YOUR BIRTHDATE!</h1>
        <h1>Congratulations!</h1>
        </div>}
    </div>
  );
};

