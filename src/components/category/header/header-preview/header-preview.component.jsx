import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { Button } from "../../../button/button.styles";
import axios from "../../../../api/api";
import {
  deleteCategories,
  setCategoriesClearSearch,
  setCategoriesSearchName,
  setCategoriesSearchDescription,
} from "../../../../redux/categories/category.actions";

import {
  Container,
  TitleContainer,
  Title,
  ButtonContainer,
} from "./header-preview.styles.js";

const CategoryHeaderPreview = ({
  idList,
  deleteCategories,
  setCategoriesClearSearch,
  setCategoriesSearchName,
  setCategoriesSearchDescription,
}) => {
  const navigate = useNavigate();

  /**
   * Delete product from database and from redux state
   * @param {array} id
   * @return boolean
   */
  const deleteCategoryApi = async (id) => {
    try {
      await axios.delete("/category/delete", {
        data: {
          idList: JSON.stringify(id),
        },
      });
      deleteCategories(id);
    } catch (error) {
      console.log({ error });
    }
    return true;
  };

  const clearFilter = () => {
    setCategoriesSearchName("");
    setCategoriesSearchDescription("");
    setCategoriesClearSearch();
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Categorias - Lista</Title>

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
          onClick={() => navigate("add-category")}
        >
          ADICIONAR
        </Button>
        <Button
          border="1px solid #282828"
          color="#fff"
          colorFont="#282828"
          onClick={() => deleteCategoryApi(idList)}
        >
          DELETAR
        </Button>
      </ButtonContainer>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteCategories: (deleteList) => dispatch(deleteCategories(deleteList)),
  setCategoriesSearchName: (searchName) =>
    dispatch(setCategoriesSearchName(searchName)),
  setCategoriesSearchDescription: (searchDescription) =>
    dispatch(setCategoriesSearchDescription(searchDescription)),
  setCategoriesClearSearch: (clearSearch) =>
    dispatch(setCategoriesClearSearch(clearSearch)),
});
export default connect(null, mapDispatchToProps)(CategoryHeaderPreview);
