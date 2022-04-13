import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteClick }) => {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={s.item}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button type="button" onClick={() => onDeleteClick(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
