import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  const dispatch = useDispatch();

  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const activeNoteId = useRef(note.id);
  const activeUrl = useRef(note.imageUrl);

  useEffect(() => {
    if (note.id !== activeNoteId.current) {
      reset(note);
      activeNoteId.current = note.id;
    }

    if (note.imageUrl !== activeUrl.current) {
      reset(note);
      activeUrl.current = note.imageUrl;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeleting(note.id));
  };

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

        {note.imageUrl && (
          <div className="notes__image">
            <img src={note.imageUrl} alt="Note" />
          </div>
        )}
      </div>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};
