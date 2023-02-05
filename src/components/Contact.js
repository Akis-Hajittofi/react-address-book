function Contact(props) {
  return (
    <li className="contact">
      <p>
        {props.contact.firstName} {props.contact.lastName}
      </p>
      <p>
        {/** TODO: Make a Link here to view contact */}
        View
      </p>
    </li>
  );
}
export default Contact;
