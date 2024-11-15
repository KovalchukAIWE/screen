import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ selectedType, onFilterChange }) => {
  return (
    <div className={styles.filter}>
      <label htmlFor="typeFilter" className={styles.filter__label}>
        Filter by Type:
      </label>
      <select
        id="typeFilter"
        value={selectedType}
        onChange={(e) => onFilterChange(e.target.value)}
        className={styles.filter__select}
      >
        <option value="all">All</option>
        <option value="develop">Develop</option>
        <option value="demo">Demo</option>
        <option value="production">Production</option>
      </select>
      <svg
        className={styles.filter__arrow}
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M8 11L14.5 18L21 11"
          stroke="#000105"
          stroke-width="1.66667"
          stroke-linecap="square"
        />
      </svg>
    </div>
  );
};

export default Filter;
