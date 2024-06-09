import "./css/App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import SearchBox from "./Components/SearchBox/SearchBox";

function App() {
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
