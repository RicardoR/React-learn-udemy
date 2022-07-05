import { addHours } from 'date-fns';
import { useCalendarStore, useUiStore } from '../../hooks';

export const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();
  const handleOpen = () => {
    setActiveEvent({
      title: '',
      start: new Date(),
      end: addHours(new Date(), 2),
      notes: '',
      bgColor: '#fafafa',
      user: {
        _id: '',
        name: '',
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
