import moment from 'moment';
import React from 'react';

export const JournalEntry = (note) => {
  const { title, body, date, imageUrl, id } = note;
  const noteDate = moment(date);

  const selectNote = () => {
    console.log('selectNote', id);
  };

  return (
    <div onClick={selectNote} className="journal__entry">
      {imageUrl ?? (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body} </p>
      </div>
      <div className="journal__entry-date-box">
        <span> {noteDate.format('dddd')} </span>
        <h4> {noteDate.format('DD')} </h4>
      </div>
    </div>
  );
};
