import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from 'date-fns';

import { Navbar, CalendarEvent, CalendarModal } from '../';
import { getMessagesES, localizer } from '../../helpers';
import { useUiStore } from '../../store/hooks';

const events = [
  {
    title: 'Super Event',
    start: new Date(),
    end: addHours(new Date(), 2),
    notes: 'Buy things',
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'John Doe',
    },
  },
];
export const CalendarPage = () => {
  const { openDateModal } = useUiStore();

  const [defaultView, setdefaultView] = useState(
    localStorage.getItem('defaultView') || 'week'
  );

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    };

    return {
      style,
    };
  };

  const onDoubleClick = () => openDateModal();

  const onSelect = (event) => {
    console.log('select', event);
  };

  const onViewChanged = (event) => {
    localStorage.setItem('defaultView', event);
    setdefaultView(event);
  };

  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={defaultView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />

      <CalendarModal />
    </>
  );
};
