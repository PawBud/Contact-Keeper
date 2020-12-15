import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CONTACTS,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  //temporary data, will be taken in from the backend later on.
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "John Wick",
        email: "johnwick@gmail.com",
        phone: "111-111-1111",
        type: "personal",
      },
      {
        id: 2,
        name: "John Wick 2",
        email: "johnwick1@gmail.com",
        phone: "111-111-1112",
        type: "personal",
      },
      {
        id: 3,
        name: "John Wick 3",
        email: "johnwick2@gmail.com",
        phone: "111-111-1113",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
