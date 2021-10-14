import React from "react";
import { useState, useEffect } from "react";

import Table from "../Table/Table";
import styles from "./CountryList.module.css";

const CountryList = ({ searchingKeyword }) => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchCountryHandler = async () => {
      const promise = await fetch("https://restcountries.com/v3.1/all");
      const data = await promise.json();

      const refinedData = [];
      for (let key in data) {
        refinedData.push({
          flag: (
            <img
              src={data[key].flags.svg}
              alt={data[key].name.official}
              className={styles.countryImg}
            />
          ),
          name: data[key].name.official,
          population: data[key].population,
          language: data[key].languages
            ? Object.values(data[key].languages).map((lan) => (
                <li key={Math.random()}>{lan}</li>
              ))
            : "",
          region: data[key].continents[0],
        });
      }

      setCountryData(refinedData);
    };

    fetchCountryHandler();
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: "Flag", accessor: "flag" },
      { Header: "Name", accessor: "name" },
      { Header: "Population", accessor: "population" },
      { Header: "Lang", accessor: "language" },
      { Header: "Region", accessor: "region" },
    ],
    []
  );

  // All countries after filtering
  const filteredCountries = countryData.filter(country => {
    return country.name.toLowerCase().includes(searchingKeyword.toLowerCase());
  })

  return (
    <div>
      <Table columns={columns} data={filteredCountries} />
    </div>
  );
};

export default CountryList;
