import React, { useState } from 'react';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Navbar } from '../ui/Navbar';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import { messages } from '../../helpers/calendar-messages-es';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import { CalendarConstants } from './calendarConstants';

moment.locale('es');
const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Un cumpleaños',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    allDay: false,
    bgColor: '#0073b1',
    user: {
      _id: '123',
      name: 'Ricardo',
    },
  },
];

export const CalendarScreen = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem(CalendarConstants.localStorageView) ||
      CalendarConstants.month
  );

  const onDoubleClick = (e) => {
    console.log(e);
  };

  const onSelectEvent = (e) => {
    console.log(e);
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem(CalendarConstants.localStorageView, e);
  };

  const eventStyleGetter = (event) => {
    const style = {
      backgroundColor: event.bgColor,
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
    };
    return { style };
  };

  return (
    <div className="calendar-screen">
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        defaultView={lastView}
        components={{
          event: CalendarEvent,
        }}
      />

      <CalendarModal />
    </div>
  );
};
