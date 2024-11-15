import React, { useState } from "react";
import { appsList } from "../../appsList";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import styles from "./List.module.css";

const List = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (type) => {
    setSelectedType(type);
  };

  const filteredApps = appsList.filter((app) => {
    const matchesSearch = app.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = selectedType === "all" || app.type === selectedType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className={styles.list}>
      <div className={styles.list__sidebar}>
        <Filter
          selectedType={selectedType}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div className={styles.list__main}>
        <SearchBar onSearch={handleSearch} />
        <ul className={styles.list__items}>
          {filteredApps.map((app, index) => (
            <Card key={index} app={app} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
