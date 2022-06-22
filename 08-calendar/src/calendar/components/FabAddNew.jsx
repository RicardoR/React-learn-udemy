import { addHours } from 'date-fns';
import { useCalendarStore, useUiStore } from '../../store/hooks';

export const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();
  const handleOpen = () => {
    setActiveEvent({
      title: null,
      start: new Date(),
      end: addHours(new Date(), 2),
      notes: null,
      bgColor: '#fafafa',
      user: {
        _id: null,
        name: null,
      },
    });

    openDateModal();
  };

  return (
    <button onClick={handleOpen} className="btn btn-primary fab">
      <i className="fas fa-plus"></i>
    </button>
  );
};
