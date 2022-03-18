import React from "react";
import { connect } from "react-redux";

import ProductItem from "../category-item/category-item.component";
import {
  setCategoriesPage,
  setCategoriesSearchName,
  setCategoriesSearchDescription,
} from "../../../redux/categories/category.actions";
import FormInput from "../../form-input/form-input.component";

import {
  Container,
  TitleContainer,
  ItemContainer,
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
  setCategoriesSearchName,
  setCategoriesSearchDescription,
  clearSearch,
}) => {
  const [searchName, setSearchName] = React.useState("");
  const [searchDescription, setSearchDescription] = React.useState("");

  const pages = new Array(totalPageNumbers).fill(null).map((x, i) => i);

  const handleChangeName = (e) => {
    const name = e.target.value;

    setSearchName(name);
    setCategoriesSearchName(name);
  };

  const handleChangeDescripion = (e) => {
    const description = e.target.value;

    setCategoriesSearchDescription(description);
    setSearchDescription(description);
  };

  React.useEffect(() => {
    setSearchName("");
    setSearchDescription("");
  }, [clearSearch]);

  return (
    <Container>
      <TitleContainer>
        <ItemContainer>
          <Item>Categoria</Item>
          <FormInput
            name="name"
            value={searchName}
            onChange={handleChangeName}
            small
            placeholder="Buscar Categoria..."
          />
        </ItemContainer>
        <ItemContainer>
          <Item>Descrição</Item>
          <FormInput
            name="description"
            value={searchDescription}
            onChange={handleChangeDescripion}
            small
            placeholder="Buscar Descrição..."
          />
        </ItemContainer>
        <ItemContainer>
          <Item>Opções</Item>
        </ItemContainer>
      </TitleContainer>
      {categories?.map(
        (categoryItem) =>
          categoryItem._id !== "select" && (
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
          próximo
        </Page>
      </Pagination>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  categories: state.category.categories,
  currentPage: state.category.pageNumber,
  totalPageNumbers: state.category.totalPageNumbers,
  clearSearch: state.category.clearSearch,
});

const mapDispatchToProps = (dispatch) => ({
  setCategoriesPage: (currentPage) => dispatch(setCategoriesPage(currentPage)),
  setCategoriesSearchName: (searchName) =>
    dispatch(setCategoriesSearchName(searchName)),
  setCategoriesSearchDescription: (searchDescription) =>
    dispatch(setCategoriesSearchDescription(searchDescription)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDirectory);
