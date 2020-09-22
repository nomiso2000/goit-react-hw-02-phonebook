import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  static propTypes = {
    onAddItem: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name && this.state.number) {
      this.props.onAddItem({ ...this.state });
    }
    this.clearState();
  };

  clearState = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name..."
          onChange={this.handleChange}
          value={name}
        />
        <input
          type="text"
          name="number"
          placeholder="Enter your number..."
          onChange={this.handleChange}
          value={number}
        />
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
