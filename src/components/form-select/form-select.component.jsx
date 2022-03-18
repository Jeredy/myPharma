import React from "react";

import { Container, Select, Label, Option } from "./form-select.styles";

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
  name,
  options,
  selected,
}) => (
  <Container>
    <Label>{label}</Label>
    <Select
      as="select"
      name={name}
      className={`${!!error ? "error-input" : ""}`}
      onChange={handleChange}
    >
      {options.map(({ name }, index) => (
        <Option
          selected={selected === name.toLowerCase()}
          key={index}
          value={name.toLowerCase()}
        >
          {name}
        </Option>
      ))}
    </Select>
    {error && <div className="error-label">{`*${errorMessage}`}</div>}
  </Container>
);

export default FormSelect;
