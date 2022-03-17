import React from "react";
import { connect } from "react-redux";

import ProductItem from "../product-item/product-item.component";
import { setProductsPage } from "../../../redux/products/product.actions";

import {
  Container,
  TitleContainer,
  Item,
  Pagination,
  Page,
} from "./directory.styles";

const ProductDirectory = ({
  checkboxDeleteList,
  products,
  totalPageNumbers,
  setProductsPage,
  currentPage,
}) => {
  const pages = new Array(totalPageNumbers).fill(null).map((x, i) => i);

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
      <Pagination>
        <Page
          onClick={() =>
            currentPage > 0 ? setProductsPage(currentPage - 1) : {}
          }
        >
          anterior
        </Page>
        {pages.map((pageNumber) => (
          <Page
            onClick={() => setProductsPage(pageNumber)}
            isCcurrentPage={pageNumber === currentPage}
          >
            {pageNumber + 1}
          </Page>
        ))}
        <Page
          onClick={() =>
            currentPage < totalPageNumbers - 1
              ? setProductsPage(currentPage + 1)
              : {}
          }
        >
          proximo
        </Page>
      </Pagination>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.products,
  currentPage: state.product.pageNumber,
  totalPageNumbers: state.product.totalPageNumbers,
});

const mapDispatchToProps = (dispatch) => ({
  setProductsPage: (currentPage) => dispatch(setProductsPage(currentPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDirectory);
