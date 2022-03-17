import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { Button } from "../../../button/button.styles";
import axios from "../../../../api/api";
import { deleteProducts } from "../../../../redux/products/product.actions";

import { Container, Title, ButtonContainer } from "./header-preview.styles.js";

const HeaderPreview = ({ idList }) => {
  const navigate = useNavigate();

  /**
   * Delete product from database
   * @param {array} checkboxId
   * @return boolean
   */
   const deleteCategoryApi = async (id) => {
    try {
      // await axios.delete("/product/delete", {
      //   data: {
      //     idList: JSON.stringify(id),
      //   },
      // });
    } catch (error) {
      console.log({ error });
    }
    return true;
  };

  return (
    <Container>
      <Title>Categorias - Lista</Title>
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
  deleteProducts: (deleteList) => dispatch(deleteProducts(deleteList)),
});
export default connect(null, mapDispatchToProps)(HeaderPreview);

