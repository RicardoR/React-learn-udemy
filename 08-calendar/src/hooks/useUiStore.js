import { useSelector, useDispatch } from 'react-redux';
import { onOpenDateModal, onCloseDateModal } from '../';

export const useUiStore = () => {
  const dispatch = useDispatch();

  const { isDateModalOpen } = useSelector((state) => state.ui);

  const openDateModal = () => dispatch(onOpenDateModal());

  const closeDateModal = () => dispatch(onCloseDateModal());

  const toogleDateModal = () => {
    isDateModalOpen ? closeDateModal() : openDateModal();
  };

  return {
    // Props
    isDateModalOpen,
    // Methods
    openDateModal,
    closeDateModal,
    toogleDateModal,
  };
};
