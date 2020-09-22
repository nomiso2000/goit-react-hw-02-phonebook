import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Filter = ({ onSetFilter }) => {
  const loginInputId = uuidv4();

  return (
    <form>
      <h3>Find contact by name</h3>
      <input
        onChange={onSetFilter}
        type="text"
        name="filter"
        id={loginInputId}
        placeholder="Enter a name to search..."
      />
    </form>
  );
};
Filter.propTypes = {
  onSetFilter: PropTypes.func.isRequired,
};

export default Filter;
