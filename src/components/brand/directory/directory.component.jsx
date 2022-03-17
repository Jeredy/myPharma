import React from "react";
import { connect } from "react-redux";

import ProductItem from "../brand-item/brand-item.component";

import { Container, TitleContainer, Item } from "./directory.styles";

const BrandDirectory = ({ checkboxDeleteList, brands }) => {
  console.log(brands)
  return (
    <Container>
      <TitleContainer>
        <Item>Marca</Item>
        <Item>Opções</Item>
      </TitleContainer>
      {brands?.map((brandItem) => (
        <ProductItem
          key={brandItem._id}
          brandItem={brandItem}
          checkboxDeleteList={checkboxDeleteList}
        />
      ))}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  brands: state.brand.brands,
});

export default connect(mapStateToProps)(BrandDirectory);
