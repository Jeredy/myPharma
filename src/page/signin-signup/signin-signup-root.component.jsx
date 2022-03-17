import React from "react";
import { Routes, Route } from "react-router-dom";

import SignIn from "./signin/signin.component";
import SignUp from "./signup/signup.component";
import { Container, Header, Title } from "./signin-signup-root.styles";
import GlobalStyles from "../../globalStyles";

const ProductRoot = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header>
        <Title>MyPharma</Title>
      </Header>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </Container>
  );
};

export default ProductRoot;
