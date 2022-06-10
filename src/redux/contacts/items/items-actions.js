import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const deleteContact = createAction('App/deleteContact', id => ({
  payload: {
    id,
  },
}));

// использование prepareAction(Prepare Callbacks) когда аргумент не простой тип, а целый объект
export const addContact = createAction('App/addContact', (name, number) => ({
  payload: {
    name,
    number,
    id: shortid.generate(),
  },
}));
