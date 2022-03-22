import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { Button } from "../../../button/button.styles";
import axios from "../../../../api/api";
import {
  deleteBrands,
  setBrandsSearchName,
  setBrandsClearSearch,
} from "../../../../redux/brands/brand.actions";

import {
  Container,
  TitleContainer,
  Title,
  ButtonContainer,
} from "./header-preview.styles.js";

const HeaderPreview = ({
  idList,
  deleteBrands,
  setBrandsSearchName,
  setBrandsClearSearch,
}) => {
  const navigate = useNavigate();

  /**
   * Delete product from database and from redux state
   * @param {array} checkboxId
   * @return boolean
   */
  const deleteProductApi = async (id) => {
    try {
      await axios.delete("/brand/delete", {
        data: {
          idList: JSON.stringify(id),
        },
      });
      deleteBrands(id);
    } catch (error) {
      console.log({ error });
    }
    return true;
  };

  const clearFilter = () => {
    setBrandsSearchName("");
    setBrandsClearSearch();
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Marcas - Lista</Title>

        <Button
          border="1px solid #999"
          color="#fff"
          colorFont="#192841"
          onClick={clearFilter}
        >
          Limpar Pesquisa
        </Button>
      </TitleContainer>
      <ButtonContainer>
        <Button
          border="1px solid #192841"
          colorFont="#fff"
          color="#192841"
          onClick={() => navigate("add-brand")}
        >
          ADICIONAR
        </Button>
        <Button
          border="1px solid #282828"
          color="#fff"
          colorFont="#192841"
          onClick={() => deleteProductApi(idList)}
        >
          DELETAR
        </Button>
      </ButtonContainer>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteBrands: (deleteList) => dispatch(deleteBrands(deleteList)),
  setBrandsSearchName: (searchName) =>
    dispatch(setBrandsSearchName(searchName)),
  setBrandsClearSearch: () => dispatch(setBrandsClearSearch()),
});
export default connect(null, mapDispatchToProps)(HeaderPreview);
