import React, { useState, useEffect } from "react";
import getNextBirthdayTime from "../utils/timeleft";

export const Timer = ({ birthday }) => {
  const [timeLeft, setTimeLeft] = useState(getNextBirthdayTime(birthday));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getNextBirthdayTime(birthday));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [birthday]);

  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutesLeft = Math.floor((timeLeft / (1000 * 60)) % 60);
  const secondsLeft = Math.floor((timeLeft / 1000) % 60);

  return (
    <div>
      <h2>Countdown to next birthday:</h2>
      <p>
        {daysLeft} days, {hoursLeft} hours, {minutesLeft} minutes, {secondsLeft} seconds
      </p>
    </div>
  );
};

