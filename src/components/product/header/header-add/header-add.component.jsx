import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../button/button.styles";

// import axios from "../../../../api/api";

import { Container, Title, ButtonContainer } from "./header-add.styles.js";

const HeaderPreview = ({ idList, handleSubmit }) => {
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
      <Title>Novo Produto</Title>
      <ButtonContainer>
        <Button
          border="1px solid #282828"
          color="#282828"
          colorFont="#fff"
          id="add-product-btn"
          onClick={handleSubmit}
        >
          SALVAR
        </Button>
        <Button
          border="1px solid #282828"
          color="#fff"
          colorFont="#282828"
          id="add-product-btn"
          id="delete-product-btn"
          onClick={() => navigate(-1)}
        >
          CANCELAR
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default HeaderPreview;
