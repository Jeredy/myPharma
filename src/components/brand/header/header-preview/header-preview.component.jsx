import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { Button } from "../../../button/button.styles";
import axios from "../../../../api/api";
import { deleteBrands } from "../../../../redux/brands/brand.actions";

import { Container, Title, ButtonContainer } from "./header-preview.styles.js";

const HeaderPreview = ({ idList, deleteBrands }) => {
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

  return (
    <Container>
      <Title>Marcas - Lista</Title>
      <ButtonContainer>
        <Button
          border="1px solid #282828"
          color="#282828"
          colorFont="#fff"
          onClick={() => navigate("add-brand")}
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
  deleteBrands: (deleteList) => dispatch(deleteBrands(deleteList)),
});
export default connect(null, mapDispatchToProps)(HeaderPreview);
