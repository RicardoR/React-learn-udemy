import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm(note);

  const activeNoteId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeNoteId.current) {
      reset(note);
      activeNoteId.current = note.id;
    }
  }, [note, reset]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          name="title"
          value={formValues.title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="What happened today?"
          className="notes__textarea"
          name="body"
          value={formValues.body}
          onChange={handleInputChange}
        />

        {formValues.imageUrl && (
          <div className="notes__image">
            <img src={formValues.imageUrl} alt="Note" />
          </div>
        )}
      </div>
    </div>
  );
};
