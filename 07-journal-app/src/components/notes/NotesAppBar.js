import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {
  const noteActive = useSelector((state) => state.notes.active);
  const dispatch = useDispatch();

  const handleSaveNote = () => {
    dispatch(startSaveNote(noteActive));
  };

  return (
    <div className="notes__appbar">
      <span>28 de agosto 2020</span>
      <div>
        <button className="btn">Picture</button>
        <button className="btn" onClick={handleSaveNote}>
          Save
        </button>
      </div>
    </div>
  );
};
