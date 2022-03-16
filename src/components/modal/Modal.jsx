import React, { useState } from 'react';

import './modal.scss';
import moment from 'moment';

const Modal = ({ isOpen, onCloseModal }) => {
  if (!isOpen) {
    return null;
  }

  const currentDate = new Date().toLocaleDateString('en-CA');
  const [dateNow, setDateNow] = useState(currentDate);
  
  const onDateChange = (event) => {
    setDateNow(event.target.value)
  }
  console.log(dateNow)

  return (
    <div className='modal overlay'>
      <div className='modal__content'>
        <div className='create-event'>
          <button className='create-event__close-btn' onClick={onCloseModal}>
            +
          </button>
          <form className='event-form'>
            <input
              type='text'
              name='title'
              placeholder='Title'
              className='event-form__field'
            />
            <div className='event-form__time'>
              <input
                type='date'
                name='date'
                className='event-form__field'
                value={dateNow}
                onChange={onDateChange}
              />
              <input
                type='time'
                name='startTime'
                className='event-form__field'
              />
              <span>-</span>
              <input type='time' name='endTime' className='event-form__field' />
            </div>
            <textarea
              name='description'
              placeholder='Description'
              className='event-form__field'
            ></textarea>
            <button type='submit' className='event-form__submit-btn'>
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
