import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../button/button.styles";

// import axios from "../../../../api/api";

import { Container, Title, ButtonContainer } from "./header-preview.styles.js";

const HeaderPreview = ({ idList }) => {
  const navigate = useNavigate();

  /**
   * Delete product from database
   * @param {array} checkboxId
   * @return boolean
   */
  const deleteProduct = async (checkboxId) => {
    // const idDelete = { id: checkboxId };
    // try {
    //   await axios
    //     .post("/deleteProduct", JSON.stringify(idDelete))
    //     .then(() => window.location.reload());
    // } catch (error) {
    //   console.log({ error });
    // }
    // return true;
  };

  return (
    <Container>
      <Title>Categorias Lista</Title>
      <ButtonContainer>
        <Button
          border="1px solid #282828"
          color="#282828"
          colorFont="#fff"
          id="add-product-btn"
          onClick={() => navigate("add-category")}
        >
          ADICIONAR
        </Button>
        <Button
          border="1px solid #282828"
          color="#fff"
          colorFont="#282828"
          id="add-product-btn"
          id="delete-product-btn"
          onClick={() => deleteProduct(idList)}
        >
          DELETAR
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default HeaderPreview;