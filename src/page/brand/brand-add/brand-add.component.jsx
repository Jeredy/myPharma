import React from "react";
import { useLocation } from "react-router";

import HeaderAdd from "../../../components/brand/header/header-add/header-add.component";
import FormGroup from "../../../components/brand/brand-add/form-group/form-group.component";

import { Container } from "./brand-add.styles";

const ProductAddPage = () => {
  const location = useLocation();

  /**
   * Will simulate a "click" on FormGroup component to submit the form.
   */
  const pressSubmitButton = () => {
    document.getElementById("button-submit").click();
  };

  return (
    <Container>
      <HeaderAdd update={!!location.state} handleSubmit={pressSubmitButton} />
      <FormGroup state={location.state} />
    </Container>
  );
};

export default ProductAddPage;
