import React from 'react';
import c from './ContactList.module.css';
import ContactListItem from '../ContactListItem';
import { deleteContact } from '../../redux/contacts/items/items-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/selector-composition/getVisibleContacts.js';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id} className={c.item}>
            <ContactListItem
              name={name}
              number={number}
              id={id}
              onDeleteContact={() => onDeleteContact(id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
