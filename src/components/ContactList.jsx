import { ContactListItem } from './ContactListItem';

export const ContactList = ({ filteredContacts, handleDeleteContact }) => {
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};
