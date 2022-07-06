import { useDispatch, useSelector } from 'react-redux';
import calendarApi from '../api/calendarApi';
import { convertEventsToDateEvents } from '../helpers';
import {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
} from '../store';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get('/events');
      const eventsConverted = convertEventsToDateEvents(data.events);
      console.log(eventsConverted);
    } catch (error) {
      console.log('Error getting events', error);
    }
  };

  const startSavingEvent = async (calendarEvent) => {
    // todo: update event
    if (calendarEvent._id) {
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      const { data } = await calendarApi.post('/events', calendarEvent);
      dispatch(
        onAddNewEvent({
          ...calendarEvent,
          id: data.evento.id,
          user: user,
        })
      );
    }
  };

  const startDeletingEvent = () => {
    dispatch(onDeleteEvent());
  };

  return {
    // Props
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    // Methods
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    startLoadingEvents,
  };
};
