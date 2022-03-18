import React from "react";
import { connect } from "react-redux";

import ProductItem from "../brand-item/brand-item.component";
import {
  setBrandsPage,
  setBrandsSearchName,
} from "../../../redux/brands/brand.actions";
import FormInput from "../../form-input/form-input.component";

import {
  Container,
  TitleContainer,
  ItemContainer,
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
  setBrandsSearchName,
  clearSearch,
}) => {
  const [searchName, setSearchName] = React.useState("");

  const pages = new Array(totalPageNumbers).fill(null).map((x, i) => i);

  const handleChangeName = (e) => {
    const name = e.target.value;

    setSearchName(name);
    setBrandsSearchName(name);
  };

  
  React.useEffect(() => {
    setSearchName("");
  }, [clearSearch]);
  
  return (
    <Container>
      <TitleContainer>
        <ItemContainer>
          <Item>Marca</Item>
          <FormInput
            name="name"
            value={searchName}
            onChange={handleChangeName}
            small
            placeholder="Buscar Marca..."
          />
        </ItemContainer>
        <ItemContainer>
          <Item>Opções</Item>
        </ItemContainer>
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
  clearSearch: state.brand.clearSearch,
});

const mapDispatchToProps = (dispatch) => ({
  setBrandsPage: (currentPage) => dispatch(setBrandsPage(currentPage)),
  setBrandsSearchName: (searchName) =>
    dispatch(setBrandsSearchName(searchName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandDirectory);
