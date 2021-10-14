import React from "react";

import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {

  const onChangeHandler = (event) => {
    onSearch(event.target.value);
  }
  
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search country name" onChange={onChangeHandler} />
    </div>
  );
}
