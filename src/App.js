import { useState } from "react";

import CountryList from "./components/countryList/CountryList";
import SearchBar from "./components/searchBar/SearchBar";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const setSearchHandler = (countryName) => {
    setSearch(countryName);
    console.log(search);
  };

  return (
    <div className="App">
      <SearchBar onSearch={setSearchHandler} />
      <CountryList searchingKeyword={search} />
    </div>
  );
}

export default App;
