import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import calendarApi from '../api/calendarApi';
import { convertEventsToDateEvents } from '../helpers';
import {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  onLoadEvents,
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
      dispatch(onLoadEvents(eventsConverted));
    } catch (error) {
      console.log('Error getting events', error);
    }
  };

  const startSavingEvent = async (calendarEvent) => {
    try {
      if (calendarEvent.id) {
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
        dispatch(onUpdateEvent({ ...calendarEvent, user }));
        return;
      }

      const { data } = await calendarApi.post('/events', calendarEvent);
      dispatch(
        onAddNewEvent({
          ...calendarEvent,
          id: data.evento.id,
          user: user,
        })
      );
    } catch (error) {
      Swal.fire('Error saving event', error.response?.data?.msg, 'error');
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
