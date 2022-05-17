import React from 'react';
import { Sidebar } from './Sidebar';
import { EmptyState } from './EmptyState';
import { NoteScreen } from '../notes/NoteScreen';

export const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        <NoteScreen />
        {/* <EmptyState /> */}
      </main>
    </div>
  );
};
