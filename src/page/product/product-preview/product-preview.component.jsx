import React from "react";

import Directory from "../../../components/product/directory/directory.component";
import HeaderPreview from "../../../components/product/header/header-preview/header-preview.component";

import { Container } from "./product-preview.styles.js";

const ProductPreview = () => {
  const checkboxId = [];

  const checkboxDeleteList = (id) => {
    const result = checkboxId.find((data) => data == id);

    if (!!result) {
      checkboxId.splice(
        checkboxId.findIndex((data) => data === id),
        1
      );
    } else {
      checkboxId.push(id);
    }
  };

  return (
    <Container>
      <HeaderPreview idList={checkboxId} />
      <Directory checkboxDeleteList={checkboxDeleteList} />
    </Container>
  );
};

export default ProductPreview;
