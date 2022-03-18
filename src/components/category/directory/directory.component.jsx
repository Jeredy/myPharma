import React from "react";
import { connect } from "react-redux";

import ProductItem from "../category-item/category-item.component";
import { setCategoriesPage } from "../../../redux/categories/category.actions";

import {
  Container,
  TitleContainer,
  Item,
  Pagination,
  Page,
} from "./directory.styles";

const CategoryDirectory = ({
  checkboxDeleteList,
  categories,
  totalPageNumbers,
  setCategoriesPage,
  currentPage,
}) => {
  const pages = new Array(totalPageNumbers).fill(null).map((x, i) => i);

  return (
    <Container>
      <TitleContainer>
        <Item>Categoria</Item>
        <Item>Descrição</Item>
        <Item>Opções</Item>
      </TitleContainer>
      {categories?.map(
        (categoryItem) =>
          categoryItem._id !== 'select' && (
            <ProductItem
              key={categoryItem._id}
              categoryItem={categoryItem}
              checkboxDeleteList={checkboxDeleteList}
            />
          )
      )}
      <Pagination>
        <Page
          onClick={() =>
            currentPage > 0 ? setCategoriesPage(currentPage - 1) : {}
          }
        >
          anterior
        </Page>
        {pages.map((pageNumber) => (
          <Page
            onClick={() => setCategoriesPage(pageNumber)}
            isCcurrentPage={pageNumber === currentPage}
          >
            {pageNumber + 1}
          </Page>
        ))}
        <Page
          onClick={() =>
            currentPage < totalPageNumbers - 1
              ? setCategoriesPage(currentPage + 1)
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
  categories: state.category.categories,
  currentPage: state.category.pageNumber,
  totalPageNumbers: state.category.totalPageNumbers,
});

const mapDispatchToProps = (dispatch) => ({
  setCategoriesPage: (currentPage) => dispatch(setCategoriesPage(currentPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDirectory);
