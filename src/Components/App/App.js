import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import styles from "./App.module.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  filterContacts = (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  setFilter = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  addItem = (item) => {
    if (
      this.state.contacts.every(
        (contact) =>
          contact.name.toLocaleLowerCase() !== item.name.toLocaleLowerCase()
      )
    ) {
      const itemToAdd = { ...item, id: uuidv4() };
      this.setState((state) => ({
        contacts: [...state.contacts, itemToAdd],
      }));
    } else {
      alert(`${item.name} is already in contacts!`);
    }
  };

  deleteItem = (id) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filtratedContacts = this.filterContacts(contacts, filter);
    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm onAddItem={this.addItem} />
        <h2>Contacts</h2>
        <Filter onSetFilter={this.setFilter} />
        <ContactList items={filtratedContacts} onDelete={this.deleteItem} />
      </div>
    );
  }
}

export default App;
