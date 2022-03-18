import React from "react";

// import mask from "../mask";

import { Container, Input, Label, ErrorLabel } from "./form-input.styles";

/**
 * Custom input form that can validate onChange with a mask
 * @param {function} handleChange
 * @param {string} label
 * @param {boolean} error
 * @param {string} errorMessage
 * @param {*} otherProps other properties to input
 * @returns
 */

const FormInput = ({
  handleChange,
  label,
  error = false,
  errorMessage = "",
  small = false,
  disabled,
  ...otherProps
}) => (
  <Container small={small}>
    {label && <Label>{label}</Label>}
    <Input
      className={`${!!error ? "error-input" : ""}`}
      onChange={handleChange}
      small={small}
      {...otherProps}
    />
    {error && <ErrorLabel>{`*${errorMessage}`}</ErrorLabel>}
  </Container>
);

export default FormInput;
