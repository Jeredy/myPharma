import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../../button/button.styles";
import axios from "../../../../api/api";

import { Container, Title, ButtonContainer } from "./header-preview.styles.js";

const HeaderPreview = ({ idList }) => {
  const navigate = useNavigate();

  /**
   * Delete product from database
   * @param {array} checkboxId
   * @return boolean
   */
  const deleteProduct = async (idList) => {
    try {
      await axios
        .delete("/category/delete", {
          data: {
            idList: JSON.stringify(idList),
          },
        })
        .then(() => window.location.reload());
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
          id="add-category-btn"
          onClick={() => navigate("add-category")}
        >
          ADICIONAR
        </Button>
        <Button
          border="1px solid #282828"
          color="#fff"
          colorFont="#282828"
          id="add-category-btn"
          id="delete-category-btn"
          onClick={() => deleteProduct(idList)}
        >
          DELETAR
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default HeaderPreview;
