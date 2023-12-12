import React, { useState } from 'react';
import s from './PhoneBook.module.css';
import { nanoid } from 'nanoid';

export const ContactForm = ({ handleAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    const newContact = { id, name, number };

    handleAddContact(newContact);

    setName('');
    setNumber('');
  };

  const handleChangeInput = e => {
    const { value, name } = e.currentTarget;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Name
        <input
          value={name}
          onChange={handleChangeInput}
          type="text"
          name="name"
          required
        />
      </label>
      <label htmlFor="">
        Number
        <input
          value={number}
          onChange={handleChangeInput}
          type="tel"
          name="number"
          required
        />
      </label>
      <button className={s.add_contanct_button} type="submit">
        Add contact
      </button>
    </form>
  );
};
