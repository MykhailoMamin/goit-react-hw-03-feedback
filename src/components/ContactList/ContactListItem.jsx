import React from 'react';
import { DeleteButton } from './ContactList.styled';

export const ContactListItem = ({ id, text, number, onDeleteContact }) => (
  <li>
    <span>{text}</span>:&nbsp;
    <span>{number}</span>&nbsp;
    <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
      Delete
    </DeleteButton>
  </li>
);
