import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';
import moment from 'moment';

const App = () => {
  const startOfWeek = getWeekStartDate(new Date());
  const [weekRange, setWeekRange] = useState({
    weekStartDate: startOfWeek,
  });

  const { weekStartDate } = weekRange;

  const onPrev = () => {
    const previousWeek = moment(weekStartDate)
      .add(7 * -1, 'days')
      .toDate();
    setWeekRange({ weekStartDate: previousWeek });
  };

  const onNext = () => {
    const previousWeek = moment(weekStartDate)
      .add(7 * 1, 'days')
      .toDate();
    setWeekRange({ weekStartDate: previousWeek });
  };

  const onToday = () => {
    setWeekRange({ weekStartDate: startOfWeek });
  };

  const weekDates = generateWeekRange(weekStartDate);

  return (
    <div>
      <Header
        weekStartDate={weekStartDate}
        onNext={onNext}
        onPrev={onPrev}
        onToday={onToday}
      />
      <Calendar weekDates={weekDates} />
    </div>
  );
};

export default App;
