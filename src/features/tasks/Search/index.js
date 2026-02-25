import { useDispatch, useSelector } from "react-redux";
import { setQuery, selectQuery } from "./searchSlice.js";

const Search = () => {
  const query = useSelector(selectQuery);
  const dispatch = useDispatch();

  return (
    <input
      value={query}
      onChange={(e) => dispatch(setQuery(e.target.value))}
      placeholder="Filtruj zadania..."
    />
  );
};

export default Search;
