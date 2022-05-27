import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startSavePicture } from '../../actions/notes';

export const NotesAppBar = () => {
  const noteActive = useSelector((state) => state.notes.active);
  const dispatch = useDispatch();

  const handleSaveNote = () => {
    dispatch(startSaveNote(noteActive));
  };

  const handlePictureUpload = () => {
    const fileInput = document.querySelector('#file-selector');
    fileInput.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startSavePicture(file));
    }
  };

  return (
    <div className="notes__appbar">
      <span>28 de agosto 2020</span>

      <input
        type="file"
        id="file-selector"
        hidden
        onChange={handleFileChange}
      />

      <div>
        <button className="btn" onClick={handlePictureUpload}>
          Picture
        </button>
        <button className="btn" onClick={handleSaveNote}>
          Save
        </button>
      </div>
    </div>
  );
};
