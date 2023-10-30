import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, FormInput, SubmitButton } from './ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    if (this.props.contacts.some(contact => contact.text === name)) {
      alert(`${name} is already in contacts.`);
      this.setState({ name: '' });
    } else {
      this.props.onSubmit(name, number);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <FormInput>
            Name
            <br />
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              id={nanoid()}
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </FormInput>
          <br />
          <FormInput>
            Number
            <br />
            <input
              type="tel"
              placeholder="Enter number"
              name="number"
              id={nanoid()}
              value={this.state.number}
              onChange={this.handleChange}
              required
            />
          </FormInput>
          <br />
          <SubmitButton type="submit">Add contact</SubmitButton>
        </form>
      </Container>
    );
  }
}
