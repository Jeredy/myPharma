import React from "react";

import HeaderAdd from "../../../components/brand/header/header-add/header-add.component";
import FormGroup from "../../../components/brand/brand-add/form-group/form-group.component";
import { Container } from "./brand-add.styles";

const ProductAddPage = () => {
  /**
   * Will simulate a "click" on FormGroup component to submit the form.
   */
  const pressSubmitButton = () => {
    document.getElementById("button-submit").click();
  };

  return (
    <Container>
      <HeaderAdd handleSubmit={pressSubmitButton} />
      <FormGroup />
    </Container>
  );
};

export default ProductAddPage;