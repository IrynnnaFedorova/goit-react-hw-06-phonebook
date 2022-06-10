import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './items-actions';

export const contactReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],

  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
});
