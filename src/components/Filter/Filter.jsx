import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/contacts/filter/filter-action';
import { getFilter } from '../../redux/contacts/filter/filter-selectors';
import c from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <label className={c.label}>
        Find contacts by name
        <input
          className={c.input}
          type="text"
          value={value}
          onChange={e => dispatch(updateFilter(e.target.value))}
        />
      </label>
    </>
  );
};

export default Filter;
