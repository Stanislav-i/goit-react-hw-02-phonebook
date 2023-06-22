

export const ContactList = ({ contactList, onDeleteContact }) => {
  return (
    <ul>
      {contactList.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button onClick={()=> onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};