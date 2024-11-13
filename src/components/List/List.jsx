import React, { useState } from "react";
import { appsList } from "../../appsList";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./List.module.css";

const List = () => {
  const [filteredApps, setFilteredApps] = useState(appsList);

  const handleSearch = (searchTerm) => {
    const filtered = appsList.filter((app) =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredApps(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ul className={styles.list}>
        {filteredApps.map((app, index) => (
          <Card key={index} app={app} />
        ))}
      </ul>
    </div>
  );
};

export default List;
