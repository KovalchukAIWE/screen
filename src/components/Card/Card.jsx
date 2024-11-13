import React from "react";
import styles from "./Card.module.css";

const Card = ({ app }) => {
  return (
    <li className={styles.card}>
      <a
        className={styles.cardWrapper}
        href={app.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.cardImageWrapper}>
          <img
            className={styles.cardImage}
            src={app.imageUrl}
            alt={`Link to ${app.link}`}
          />
        </div>
        <p className={styles.cardTitle}>{app.title}</p>
      </a>
    </li>
  );
};

export default Card;
