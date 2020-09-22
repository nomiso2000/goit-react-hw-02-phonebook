import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ items, onDelete }) => {
  return (
    items.length > 0 && (
      <ul>
        {items.map(({ name, id, number }) => {
          return (
            <li key={id} className={styles.item}>
              <span>
                {name} {number}
              </span>
              <button
                className={styles.button}
                type="button"
                onClick={() => onDelete(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    )
  );
};
ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactList;
