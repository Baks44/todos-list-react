import { Input } from "../Buttons/styled";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, selectQuery } from "./searchSlice.js";

const Search = () => {
  const query = useSelector(selectQuery);
  const dispatch = useDispatch();

  return (
    <Input
      placeholder="Filtruj zadania..."
      value={query}
      onChange={({ target }) => dispatch(setQuery(target.value))}
    />
  );
};

export default Search;
