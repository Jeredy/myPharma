import React from "react";

import HeaderAdd from "../../../components/product/header/header-add/header-add.component";
import FormGroup from "../../../components/product/product-add/form-group/form-group.component";

const ProductAddPage = () => {
  /**
   * Will simulate a "click" on FormGroup component to submit the form.
   */
  const pressSubmitButton = () => {
    document.getElementById("submit").click();
  };

  return (
    <div>
      <HeaderAdd handleSubmit={pressSubmitButton} />
      <FormGroup />
    </div>
  );
};

export default ProductAddPage;
