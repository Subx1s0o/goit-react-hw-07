import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "../ContactList/contactList.module.css";
import { useSelector } from "react-redux";
export default function ContactList() {
  const users = useSelector(selectContacts);

  const name = useSelector(selectNameFilter);

  const filteredUsers = users.filter((contact) =>
    contact.name.toLowerCase().includes(name.toLowerCase().trim())
  );

  return (
    <div>
      <ul className={css.userList}>
        {filteredUsers.map((user) => {
          return <Contact userData={user} key={user.id} />;
        })}
      </ul>
    </div>
  );
}
