import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import {
  setProductsSearchName,
  setProductsSearchBrand,
  setProductsSearchCategory,
  setProductsClearSearch,
} from "../../../../redux/products/product.actions";
import { Button } from "../../../button/button.styles";
import axios from "../../../../api/api";
import { deleteProducts } from "../../../../redux/products/product.actions";

import {
  Container,
  TitleContainer,
  Title,
  ButtonContainer,
} from "./header-preview.styles.js";

const HeaderPreview = ({
  idList,
  deleteProducts,
  setProductsSearchName,
  setProductsSearchBrand,
  setProductsSearchCategory,
  setProductsClearSearch,
}) => {
  const navigate = useNavigate();

  /**
   * Delete product from database and from redux state
   * @param {array} checkboxId
   * @return boolean
   */
  const deleteProductApi = async (id) => {
    try {
      await axios.delete("/product/delete", {
        data: {
          idList: JSON.stringify(id),
        },
      });
      deleteProducts(id);
    } catch (error) {
      console.log({ error });
    }
    return true;
  };

  const clearFilter = () => {
    setProductsSearchName("");
    setProductsSearchBrand("");
    setProductsSearchCategory("");
    setProductsClearSearch();
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Produtos - Lista</Title>
        <Button
          border="1px solid #282828"
          color="#fff"
          colorFont="#282828"
          onClick={clearFilter}
        >
          Limpar Pesquisa
        </Button>
      </TitleContainer>
      <ButtonContainer>
        <Button
          border="1px solid #282828"
          color="#282828"
          colorFont="#fff"
          onClick={() => navigate("add-product")}
        >
          ADICIONAR
        </Button>
        <Button
          border="1px solid #282828"
          color="#fff"
          colorFont="#282828"
          onClick={() => deleteProductApi(idList)}
        >
          DELETAR
        </Button>
      </ButtonContainer>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteProducts: (deleteList) => dispatch(deleteProducts(deleteList)),
  setProductsSearchName: (searchName) =>
    dispatch(setProductsSearchName(searchName)),
  setProductsSearchBrand: (searchBrand) =>
    dispatch(setProductsSearchBrand(searchBrand)),
  setProductsSearchCategory: (searchCategory) =>
    dispatch(setProductsSearchCategory(searchCategory)),
  setProductsClearSearch: (clearSearch) =>
    dispatch(setProductsClearSearch(clearSearch)),
});
export default connect(null, mapDispatchToProps)(HeaderPreview);
