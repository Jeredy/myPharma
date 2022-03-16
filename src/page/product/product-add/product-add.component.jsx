import React from "react";

import HeaderAdd from "../../../components/product/header/header-add/header-add.component";
import FormGroup from "../../../components/product/product-add/form-group/form-group.component";
import { Container } from "./product-add.styles";
import { useLocation } from "react-router";

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
      <FormGroup state={location.state}/>
    </Container>
  );
};

export default ProductAddPage;
 