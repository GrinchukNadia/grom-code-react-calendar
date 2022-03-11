import React from 'react';
import { days } from '../../utils/dateUtils.js';
import moment from 'moment';

const Navigation = ({ weekDates }) => {
  const today = moment(new Date()).format('DD-MMMM-YYYY');

  const dayHtml = (date, isToday) => {
    if (isToday) {
      return (
        <div className='calendar__day-label day-label'>
          <div className='currentDay'>
            <span className='day-label__day-name'>
              {moment(date).format('ddd')}
            </span>
            <span className='day-label__day-number'>
              {moment(date).format('DD')}
            </span>
          </div>
        </div>
      );
    }
    return (
      <div className='calendar__day-label day-label'>
        <span className='day-label__day-name'>
          {moment(date).format('ddd')}
        </span>
        <span className='day-label__day-number'>
          {moment(date).format('DD')}
        </span>
      </div>
    );
  };

  return (
    <header className='calendar__header'>
      {weekDates.map((dayDate, i) =>
        today === moment(dayDate).format('DD-MMMM-YYYY')
          ? dayHtml(dayDate, true)
          : dayHtml(dayDate, false)
      )}
    </header>
  );
};

export default Navigation;
