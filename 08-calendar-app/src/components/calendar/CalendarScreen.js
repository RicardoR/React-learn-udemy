import React from 'react';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Navbar } from '../ui/Navbar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment); // or globalizeLocalizer

const events = [
  {
    title: 'Un cumpleaños',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    allDay: true,
    bgColor: '#0073b1',
  },
];

export const CalendarScreen = () => {
  return (
    <div className='calendar-screen'>
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};
