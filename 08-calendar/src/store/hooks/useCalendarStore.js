import { useDispatch, useSelector } from 'react-redux';
import { onSetActiveEvent } from '../';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  return {
    // Props
    events,
    activeEvent,

    // Methods
    setActiveEvent,
  };
};
