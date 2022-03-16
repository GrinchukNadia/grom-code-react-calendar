import React from 'react';
import RedLine from '../calendar/RedLine';
import Hour from '../hour/Hour';
import moment from 'moment';

import './day.scss';

const Day = ({ today, dataDay, dayEvents }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className='calendar__day' data-day={dataDay}>
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter((event) => {
          event.dateFrom.getHours() === hour;
        });

        return (
          <Hour key={dataDay + hour} dataHour={hour} hourEvents={hourEvents} />
        );
      })}
      {dataDay === +moment(today).format('DD') ? <RedLine /> : null}
    </div>
  );
};

export default Day;
