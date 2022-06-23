import { useDispatch, useSelector } from 'react-redux';
import { onSetActiveEvent, onAddNewEvent } from '../';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    // todo: llegar al back

    // todo bien

    if (calendarEvent._id) {
      // update
    } else {
      // creando
      dispatch(
        onAddNewEvent({
          ...calendarEvent,
          _id: new Date().getTime(),
        })
      );
    }
  };

  return {
    // Props
    events,
    activeEvent,

    // Methods
    setActiveEvent,
    startSavingEvent,
  };
};
