import React from "react";
import { connect } from "react-redux";

import ProductItem from "../product-item/product-item.component";
import {
  setProductsPage,
  setProductsSearchName,
  setProductsSearchBrand,
  setProductsSearchCategory,
} from "../../../redux/products/product.actions";
import FormInput from "../../form-input/form-input.component";

import {
  Container,
  TitleContainer,
  ItemContainer,
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
  setProductsSearchName,
  setProductsSearchBrand,
  setProductsSearchCategory,
}) => {
  const [searchName, setSearchName] = React.useState("");
  const [searchCategory, setSearchCategory] = React.useState("");
  const [searchBrand, setSearchBrand] = React.useState("");

  const pages = new Array(totalPageNumbers).fill(null).map((x, i) => i);

  const handleChangeName = (e) => {
    const name = e.target.value;

    setSearchName(name);
    setProductsSearchName(name);
  };

  const handleChangeBrand = (e) => {
    const brand = e.target.value;

    setSearchBrand(brand);
    setProductsSearchBrand(brand);
  };

  const handleChangeCategory = (e) => {
    const category = e.target.value;

    setSearchCategory(category);
    setProductsSearchCategory(category);
  };
  return (
    <Container>
      <TitleContainer>
        <ItemContainer>
          <Item>Produto</Item>
          <FormInput
            name="name"
            value={searchName}
            onChange={handleChangeName}
            small
            placeholder="Buscar Produto..."
          />
        </ItemContainer>
        <ItemContainer>
          <Item>Categoria</Item>
          <FormInput
            name="category"
            value={searchCategory}
            onChange={handleChangeCategory}
            small
            placeholder="Buscar Categoria..."
          />
        </ItemContainer>
        <ItemContainer>
          <Item>Marca</Item>
          <FormInput
            name="brand"
            value={searchBrand}
            onChange={handleChangeBrand}
            small
            placeholder="Buscar Marca..."
          />
        </ItemContainer>
        <ItemContainer>
          <Item>Opções</Item>
        </ItemContainer>
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
  setProductsSearchName: (searchName) =>
    dispatch(setProductsSearchName(searchName)),
  setProductsSearchBrand: (searchBrand) =>
    dispatch(setProductsSearchBrand(searchBrand)),
  setProductsSearchCategory: (searchCategory) =>
    dispatch(setProductsSearchCategory(searchCategory)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDirectory);
