import React from "react";

// import mask from "../mask";

import { Container, Select, Label } from "./form-select.styles";

/**
 * Custom input form that can validate onChange with a mask
 * @param {function} handleChange
 * @param {string} label
 * @param {boolean} error
 * @param {string} errorMessage
 * @param {*} otherProps other properties to input
 * @returns
 */

const FormSelect = ({
  handleChange,
  label,
  error = false,
  errorMessage = "",
  children,
}) => (
  <Container>
    <Label>{label}</Label>
    <Select
      className={`${!!error ? "error-input" : ""}`}
      onChange={(event) => handleChange(event.target.name)}
    >
      {children}
    </Select>
    {error && <div className="error-label">{`*${errorMessage}`}</div>}
  </Container>
);

export default FormSelect;
