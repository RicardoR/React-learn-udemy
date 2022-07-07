import { addHours } from 'date-fns';
import { useAuthStore, useCalendarStore, useUiStore } from '../../hooks';

export const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();
  const { user } = useAuthStore();
  const handleOpen = () => {
    setActiveEvent({
      title: '',
      start: new Date(),
      end: addHours(new Date(), 2),
      notes: '',
      bgColor: '#fafafa',
      user: {
        id: user.uid,
        name: user.name,
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
