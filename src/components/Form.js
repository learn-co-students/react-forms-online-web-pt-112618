import React, { Component } from 'react';

class Form extends Component {
  state = {
    firstName: '',
    lastName: ''
  }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }
  //
  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.sendFormDataSomewhere(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='firstName' onChange={this.handleChange} value={this.state.firstName} />
        <input type='text' name='lastName' onChange={this.handleChange} value={this.state.lastName} />
        <input type='submit' />
      </form>
    );
  }

}

export default Form;
