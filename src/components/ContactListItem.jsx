import s from './PhoneBook.module.css';

export const ContactListItem = ({ id, name, number, handleDeleteContact }) => {
  return (
    <li>
      {name}: {number}
      <button
        className={s.delete_button}
        onClick={() => handleDeleteContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};
