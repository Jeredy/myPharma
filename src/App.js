import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/header/header.component";
import Dropdown from "./components/dropdown/dropdown.component";
import ProductRoot from "./page/product/product-root.component";
import CategorytRoot from "./page/category/category-root.component";
import BrandRoot from "./page/brand/brand-root.component";
import SignInSignUp from "./page/signin-signup/signin-signup-root.component";
import AuthRoute from "./page/auth-root"; 

import GlobalStyle from "./globalStyles";
import { Container, SubContainer } from "./App.styles.js";

const App = ({ currentAdmin }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  if (currentAdmin === null) {
    return <SignInSignUp />;
  }

  return (
    <Container>
      <GlobalStyle />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <SubContainer>
        <Header toggle={toggle} />
        <Routes>
          <Route path="/*"  element={
              <AuthRoute>
                <ProductRoot />
              </AuthRoute>
            } />
          <Route
            path="/category/*"
            element={
              <AuthRoute>
                <CategorytRoot />
              </AuthRoute>
            }
          />
          <Route path="/brand/*"  element={
              <AuthRoute>
                <BrandRoot />
              </AuthRoute>
            } />
        </Routes>
      </SubContainer>
    </Container>
  );
};
// git commit -m "feat: created redux store and accessing user info by redux. Limiting route access by authorization"
const mapStateToProps = (state) => ({
  currentAdmin: state.admin.currentAdmin,
});
export default connect(mapStateToProps)(App);
