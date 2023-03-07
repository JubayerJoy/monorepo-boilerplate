import React, { useEffect, useState } from 'react';
import './Watch.css';

const hourIn12HourFormate = (hour: number) => (hour > 12 ? hour - 12 : hour);

const Watch: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = hourIn12HourFormate(time.getHours());
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = time.getHours() >= 12 ? 'PM' : 'AM';

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return (
    <div className="watch-container">
      <div className="watch">
        {formattedHours}:{formattedMinutes}:{formattedSeconds} {ampm}
      </div>
    </div>
  );
};

export default Watch;
