import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "./cc/ContactForm/ContactForm";
import ContactList from "./cc/ContactList/ContactList";
import SearchBox from "./cc/SearchBox/SearchBox";
import "./css/App.css";
import { fetchContacts } from "./redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
