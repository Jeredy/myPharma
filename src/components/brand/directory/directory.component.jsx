import React from "react";
import { connect } from "react-redux";

import ProductItem from "../brand-item/brand-item.component";
import { setBrandsPage } from "../../../redux/brands/brand.actions";

import {
  Container,
  TitleContainer,
  Item,
  Pagination,
  Page,
} from "./directory.styles";

const BrandDirectory = ({
  checkboxDeleteList,
  brands,
  totalPageNumbers,
  setBrandsPage,
  currentPage,
}) => {
  const pages = new Array(totalPageNumbers).fill(null).map((x, i) => i);

  return (
    <Container>
      <TitleContainer>
        <Item>Marca</Item>
        <Item>Opções</Item>
      </TitleContainer>
      {brands?.map(
        (brandItem) =>
          brandItem._id !== "select" && (
            <ProductItem
              key={brandItem._id}
              brandItem={brandItem}
              checkboxDeleteList={checkboxDeleteList}
            />
          )
      )}
      <Pagination>
        <Page
          onClick={() =>
            currentPage > 0 ? setBrandsPage(currentPage - 1) : {}
          }
        >
          anterior
        </Page>
        {pages.map((pageNumber) => (
          <Page
            onClick={() => setBrandsPage(pageNumber)}
            isCcurrentPage={pageNumber === currentPage}
          >
            {pageNumber + 1}
          </Page>
        ))}
        <Page
          onClick={() =>
            currentPage < totalPageNumbers - 1
              ? setBrandsPage(currentPage + 1)
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
  brands: state.brand.brands,
  currentPage: state.brand.pageNumber,
  totalPageNumbers: state.brand.totalPageNumbers,
});

const mapDispatchToProps = (dispatch) => ({
  setBrandsPage: (currentPage) => dispatch(setBrandsPage(currentPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandDirectory);
