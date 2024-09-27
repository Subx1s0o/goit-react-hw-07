import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./searchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div>
      <label className={css.search} htmlFor="search">
        Search Your Contacts
        <input
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          className={css.input}
          type="text"
          id="search"
          value={filter}
        />
      </label>
    </div>
  );
}
