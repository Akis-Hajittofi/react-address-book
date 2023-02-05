import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ContactsList from "./components/ContactsList";
import ContactsAdd from "./components/ContactsAdd";
import ContactsView from "./components/ContactsView";
import "./styles/styles.css";

export default function App() {
  const [contacts, setContacts] = useState([]);

  // Load all contacts on useEffect when component first renders

  useEffect(() => {
    console.log("About to fetch contacts data");
    fetch(`http://localhost:4000/contacts`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setContacts(data);
      });
  }, []); // Put depenendencies in this array if needed
  // Dependency can't be contacts as this will cause an infinite loop

  return (
    <>
      <nav>
        <h2>Menu</h2>
        <ul>
          {/* TODO: Make these links: <Link/> */}
          <li>Contacts List</li>
          <li>Add New Contact</li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<ContactsList contacts={contacts} />} />
        </Routes>
      </main>
    </>
  );
}
