import React, { useState, useEffect } from 'react';
import moment from 'moment';

const countMinutesInDay = () => {
  const dayHours = moment().get('hours') * 60;
  const dayMinutes = moment().get('minutes');
  const minutesTotal = dayHours + dayMinutes;
  return minutesTotal
}
const RedLine = () => {
  const minutesTotal = countMinutesInDay()
  const [timeInMinuts, setTimeInMinutes] = useState(minutesTotal);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const minutesTotal = countMinutesInDay()
      setTimeInMinutes(minutesTotal);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeInMinuts]);

  return (
    <div style={{ top: timeInMinuts }} className='red-line'>
      <span className='red-line_dote'></span>
      <span className='red-line_line'></span>
    </div>
  );
};

export default RedLine;
