import { useCalendarStore } from '../../store/hooks';

export const FabDelete = () => {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();
  const handleDelete = () => startDeletingEvent();

  return (
    <button
      style={{
        display: hasEventSelected ? '' : 'none',
      }}
      onClick={handleDelete}
      className="btn btn-danger fab-danger"
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
