import React from "react";

import Directory from "../../../components/product/directory/directory.component";
import HeaderPreview from "../../../components/product/header/header-preview/header-preview.component";
import Chart from "../../../components/chart/chart.component";

import {
  Container,
  SubContainer,
} from "./product-preview.styles.js";

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
      <SubContainer>
        <Directory checkboxDeleteList={checkboxDeleteList} />
        <Chart />
      </SubContainer>
    </Container>
  );
};

export default ProductPreview;
