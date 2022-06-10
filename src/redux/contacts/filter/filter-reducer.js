import { createReducer } from '@reduxjs/toolkit';
import { updateFilter } from './filter-action';

export const filterReducer = createReducer('', {
  [updateFilter]: (_, { payload }) => payload,
});
