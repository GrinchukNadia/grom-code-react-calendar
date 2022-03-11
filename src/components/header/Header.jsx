import React, { useState, useEffect } from 'react';
import { getDisplayedMonth } from '../../utils/getDisplayedMonth';

import './header.scss';

const Header = ({ onPrev, onNext, onToday, weekStartDate }) => {
  const dispalyedMonth = getDisplayedMonth(weekStartDate);
  
  return (
    <header className='header'>
      <button className='button create-event-btn'>
        <i className='fas fa-plus create-event-btn__icon'></i>Create
      </button>
      <div className='navigation'>
        <button 
          className='navigation__today-btn button'
          onClick={onToday}
        >Today</button>
        <button
          className='icon-button navigation__nav-icon'
          onClick={onPrev}
        >
          <i className='fas fa-chevron-left'></i>
        </button>
        <button
          className='icon-button navigation__nav-icon'
          onClick={onNext}
        >
          <i className='fas fa-chevron-right'></i>
        </button>
        <span className='navigation__displayed-month'>{dispalyedMonth}</span>
      </div>
    </header>
  );
};

export default Header;
