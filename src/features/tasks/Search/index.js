import { Input } from "../Buttons/styled";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, selectQuery } from "./searchSlice.js";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const query = useSelector(selectQuery);
  const dispatch = useDispatch();

  const [, setSearchParams] = useSearchParams();

  const onInputChange = ({ target }) => {
    const value = target.value;

    dispatch(setQuery(value));

    setSearchParams({
      search: value,
    });
  };

  return (
    <Input
      placeholder="Filtruj zadania..."
      value={query}
      onChange={onInputChange}
    />
  );
};

export default Search;
