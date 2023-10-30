import React from 'react';
import { ContactListItem } from './ContactListItem';
import { ContactsList } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ContactsList>
    {contacts.map(({ id, text, number }) => (
      <ContactListItem
        key={id}
        id={id}
        text={text}
        number={number}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ContactsList>
);

export default ContactList;
