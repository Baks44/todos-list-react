import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("search") || "";

  const onInputChange = ({ target }) => {
    setSearchParams({
      search: target.value,
    });
  };

  return (
    <input
      placeholder="Szukaj zadania..."
      value={query}
      onChange={onInputChange}
    />
  );
};

export default Search;
