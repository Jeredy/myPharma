import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../button/button.styles";

import { Container, Title, ButtonContainer } from "./header-add.styles.js";

const HeaderAdd = ({ handleSubmit, update }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>{`${update ? "Atualizar Categoria" : "Nova Categoria"}`}</Title>
      <ButtonContainer>
        <Button
          border="1px solid #282828"
          color="#282828"
          colorFont="#fff"
          onClick={handleSubmit}
        >
          SALVAR
        </Button>
        <Button
          border="1px solid #282828"
          color="#fff"
          colorFont="#282828"
          onClick={() => navigate(-1)}
        >
          CANCELAR
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default HeaderAdd;
