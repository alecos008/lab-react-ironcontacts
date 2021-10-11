import React, { Component } from "react";
import contacts from "../contacts.json";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { Rowing } from "@mui/icons-material";

const contactCardStyle = {
  display: "flex",
  columnGap: "50px",
};

const headingStyle = {
  borderCollapse: "collapse",
  border: "2px solid white",
  color: "white",
  fontSize: "25px",
};

const deleteBtnSyles = {
  backgroundColor: "#009100",
  color: "white",
};

const handleBtn = {
  margin: "30px 10px 30px 10px",
  backgroundColor: "#8061b6",
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
          <Button
            style={handleBtn}
            className="handle-btn"
            variant="contained"
            onClick={this.handleAddContact}
          >
            Add Random Contact
          </Button>

          <Button
            style={handleBtn}
            className="handle-btn"
            variant="contained"
            onClick={this.handleSortByName}
          >
            Sort By Name
          </Button>

          <Button
            style={handleBtn}
            className="handle-btn"
            variant="contained"
            onClick={this.handleSortByPop}
          >
            Sort By Popularity
          </Button>
        </div>
        <table
          style={{
            width: "40vw",
            borderCollapse: "collapse",
            border: "2px solid white",
            backgroundColor: "#3c2d6d",
          }}
        >
          <th style={headingStyle}>Contact Pic</th>
          <th style={headingStyle}>Name</th>
          <th style={headingStyle}>Popularity</th>
          <th style={headingStyle}>Action</th>

          {this.state.contactsList.map((contact) => (
            <tr>
              <td style={headingStyle}>
                <img
                  src={contact.pictureUrl}
                  alt="Contact Picture"
                  style={{ width: "100px", height: "150px" }}
                />
              </td>
              <td style={headingStyle}>
                <p>{contact.name}</p>
              </td>
              <td style={headingStyle}>
                <p>{contact.popularity.toFixed(2)}</p>
              </td>
              <td style={headingStyle}>
                <button
                  className="delete-btn"
                  style={deleteBtnSyles}
                  onClick={() => this.handleRemove(contact.id)}
                >
                  <DeleteIcon className="delete-icon" />
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
