import React from "react";
import { connect } from "react-redux";

import ProductItem from "../category-item/category-item.component";

import { Container, TitleContainer, Item } from "./directory.styles";

const CategoryDirectory = ({ checkboxDeleteList, categories }) => {

  return (
    <Container>
      <TitleContainer>
        <Item>Categoria</Item>
        <Item>Descrição</Item>
        <Item>Opções</Item>
      </TitleContainer>
      {categories?.map((categoryItem) => (
        <ProductItem
          key={categoryItem._id}
          categoryItem={categoryItem}
          checkboxDeleteList={checkboxDeleteList}
        />
      ))}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  categories: state.category.categories,
});

export default connect(mapStateToProps)(CategoryDirectory);
