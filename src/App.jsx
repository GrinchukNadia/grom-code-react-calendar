import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/modal.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';
import moment from 'moment';

const App = () => {
  const startOfWeek = getWeekStartDate(new Date());
  const [weekRange, setWeekRange] = useState({
    weekStartDate: startOfWeek,
  });

  const [modalIsOpen, setOpenModal] = useState(false);

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

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const weekDates = generateWeekRange(weekStartDate);

  return (
    <div>
      <Header
        weekStartDate={weekStartDate}
        onNext={onNext}
        onPrev={onPrev}
        onToday={onToday}
        onOpenModal={onOpenModal}
      />
      <Calendar weekDates={weekDates} />
      <Modal 
        isOpen={modalIsOpen} 
        onCloseModal={onCloseModal} 
      />
    </div>
  );
};

export default App;
