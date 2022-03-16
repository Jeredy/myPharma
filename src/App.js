import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import GlobalStyle from "./globalStyles";

import Dropdown from "./components/dropdown/dropdown.component";
import ProductRoot from "./page/product/product-root.component";
import CategorytRoot from "./page/category/category-root.component";
import BrandRoot from "./page/brand/brand-root.component";
import SignInSignUp from "./page/signin-signup/signin-signup-root.component";

import { Container, SubContainer } from "./App.styles.js";

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [authToken, setAuthToken] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  if (!authToken) {
    return <SignInSignUp setAuthToken={setAuthToken}/>;
  }

  return (
    <Container>
      <GlobalStyle />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <SubContainer>
        <Header toggle={toggle} />
        <Routes>
          <Route path="/product/*" element={<ProductRoot />} />
          <Route path="/category/*" element={<CategorytRoot />} />
          <Route path="/brand/*" element={<BrandRoot />} />
        </Routes>
      </SubContainer>
    </Container>
  );
};

export default App;
