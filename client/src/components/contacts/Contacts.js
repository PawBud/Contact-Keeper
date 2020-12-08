import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts } = contactContext;

    return (
        <div>
            <Fragment>
                {contacts.map(contact => (
                    <ContactItem key={contact.id} contact={contact}/>
                ))}
            </Fragment>
        </div>
    )
}

export default Contacts
