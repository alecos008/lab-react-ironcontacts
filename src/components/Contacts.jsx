import React, { Component } from "react";
import contacts from "../contacts.json";

const contactCardStyle = {
  display: "flex",
  columnGap: "10px",
};

const initialContacts = contacts.slice(0, 5);

class Contacts extends Component {
  state = {
    contactsList: initialContacts,
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
        <h1>Contact List</h1>
        {this.state.contactsList.map((contact) => (
          <div style={contactCardStyle}>
            <img
              src={contact.pictureUrl}
              alt="Contact Picture"
              style={{ width: "100px", height: "150px" }}
            />
            <h2>{contact.name}</h2>
            <h2>{contact.popularity}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default Contacts;
