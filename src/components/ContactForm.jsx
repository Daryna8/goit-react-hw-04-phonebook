import React from 'react';
import s from './PhoneBook.module.css';
import { nanoid } from 'nanoid';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    const { name, number } = this.state;
    const newContact = { id, name, number };

    this.props.handleAddContact(newContact);

    this.setState({
      name: '',
      number: '',
    });
  };

  handleChangeInput = e => {
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Name
          <input
            value={name}
            onChange={this.handleChangeInput}
            type="text"
            name="name"
            required
          />
        </label>
        <label htmlFor="">
          Number
          <input
            value={number}
            onChange={this.handleChangeInput}
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
  }
}
