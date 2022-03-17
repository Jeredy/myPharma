import React from "react";
import { connect } from "react-redux";

import ProductItem from "../product-item/product-item.component";

import { Container, TitleContainer, Item } from "./directory.styles";

const ProductDirectory = ({ checkboxDeleteList, products }) => {
  return (
    <Container>
      <TitleContainer>
        <Item>Produto</Item>
        <Item>Categoria</Item>
        <Item>Marca</Item>
        <Item>Opções</Item>
      </TitleContainer>
      {products?.map((productItem) => (
        <ProductItem
          key={productItem._id}
          productItem={productItem}
          checkboxDeleteList={checkboxDeleteList}
        />
      ))}
    </Container>
  );
};
const mapStateToProps = (state) => ({
  products: state.product.products,
});

export default connect(mapStateToProps)(ProductDirectory);
