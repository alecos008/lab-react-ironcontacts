import React, { Component } from "react";
import contacts from "../contacts.json";

const contactCardStyle = {
  display: "flex",
  columnGap: "50px",
};

const initialContacts = contacts.slice(0, 5);

class Contacts extends Component {
  //* Defining State
  state = {
    contactsList: initialContacts,
  };

  //* Method to generate random contact
  handleAddContact = () => {
    const { contactsList } = this.state;
    let randContact = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({ contactsList: [randContact, ...contactsList] });
  };

  handleSortByName = () => {
    const { contactsList } = this.state;

    let clonedList = [...contactsList];

    clonedList.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });

    this.setState({ contactsList: clonedList });
  };

  handleSortByPop = () => {
    const { contactsList } = this.state;

    let clonedList = [...contactsList];

    clonedList.sort((a, b) => {
      return b.popularity - a.popularity;
    });

    this.setState({ contactsList: clonedList });
  };

  handleRemove = (contactId) => {
    const { contactsList } = this.state;

    const filteredContacts = contactsList.filter((contact) => {
      return contact.id != contactId ? true : false;
    });

    this.setState({ contactsList: filteredContacts });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <h2>Generate Random Contact</h2>
          <button onClick={this.handleAddContact}>Add Random Contact</button>
          <button onClick={this.handleSortByName}>Sort by name</button>
          <button onClick={this.handleSortByPop}>Sort by popularity</button>
        </div>
        <h1>Contact List</h1>
        <table>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>

          {this.state.contactsList.map((contact) => (
            <tr>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt="Contact Picture"
                  style={{ width: "100px", height: "150px" }}
                />
              </td>
              <td>
                <p>{contact.name}</p>
              </td>
              <td>
                <p>{contact.popularity.toFixed(2)}</p>
              </td>
              <td>
                <button onClick={() => this.handleRemove(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Contacts;
