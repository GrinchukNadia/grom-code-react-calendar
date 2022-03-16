import React, { useState, useEffect } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import {getTasksList} from '../../gateway/events';
import moment from 'moment';

import './calendar.scss';

const Calendar = ({ weekDates }) => {
  const [allEvents, setEvents] = useState([]);
  const formatedToday = moment().format('DD-MMMM-YYYY');
  const [today] = useState(formatedToday);
  
  useEffect(() => {
    getTasksList().then((data) => setEvents(data));
  }, [allEvents]);

  return (
    <section className='calendar'>
      <Navigation today={today} weekDates={weekDates} />
      <div className='calendar__body'>
        <div className='calendar__week-container'>
          <Sidebar />
          <Week today={today} weekDates={weekDates} events={allEvents} />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
