"use client";

import React, { useState } from 'react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getMonthDays = (month, year) => {
    const totalDays = daysInMonth(month, year);
    const daysArray = [];

    for (let day = 1; day <= totalDays; day++) {
      daysArray.push(new Date(year, month, day));
    }

    return daysArray;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    // Add your logic for handling date selection
  };

  const renderCalendar = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const monthDays = getMonthDays(currentMonth, currentYear);

    return (
      <div className="calendar">
        <div className="month-header">
          <h2>{new Date(currentYear, currentMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
        </div>
        <div className="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="days">
          {monthDays.map((date) => (
            <div
              key={date}
              className={`day ${date.getMonth() !== currentMonth ? 'other-month' : ''} ${selectedDate && date.getTime() === selectedDate.getTime() ? 'selected' : ''}`}
              onClick={() => handleDateClick(date)}
            >
              {date.getDate()}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="calendar-container">
      {renderCalendar()}
    </div>
  );
};

export default Calendar;
