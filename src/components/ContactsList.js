import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Contact from "./Contact";

function ContactsList(props) {
  //"contacts" must be passed as prop to this component
  const { contacts } = props;

  return (
    <>
      <header>
        <h2>Contacts</h2>
      </header>
      <ul className="contacts-list">
        {contacts.map((contact, index) => {
          // const { firstName, lastName } = contact;
          return <Contact contact={contact} key={index} />;
        })}
      </ul>
    </>
  );
}

export default ContactsList;
