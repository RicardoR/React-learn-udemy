import { useCalendarStore, useUiStore } from '../../hooks';

export const FabDelete = () => {
  const { startDeletingEvent, hasEventSelected, activeEvent } =
    useCalendarStore();
  const { isDateModalOpen } = useUiStore();
  const handleDelete = () => startDeletingEvent(activeEvent);

  return (
    <button
      style={{
        display: hasEventSelected && !isDateModalOpen ? '' : 'none',
      }}
      onClick={handleDelete}
      className="btn btn-danger fab-danger"
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
