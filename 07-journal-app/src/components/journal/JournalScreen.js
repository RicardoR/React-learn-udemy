import React from 'react';
import { Sidebar } from './Sidebar';
import { EmptyState } from './EmptyState';

export const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        <EmptyState />
      </main>
    </div>
  );
};
