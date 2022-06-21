import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
  title: 'Super Event',
  start: new Date(),
  end: addHours(new Date(), 2),
  notes: 'Buy things',
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'John Doe',
  },
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    setCounter: (state) => {
      state.counter = 1;
    },
  },
});

export const { setCounter } = calendarSlice.actions;
