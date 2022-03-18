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
import {
  setProducts,
  setProductsTotalPages,
} from "./redux/products/product.actions";
import {
  setCategories,
  setCategoriesTotalPages,
} from "./redux/categories/category.actions";
import { setBrands, setBrandsTotalPages } from "./redux/brands/brand.actions";
import axios from "./api/api";

import GlobalStyle from "./globalStyles";
import { Container, SubContainer } from "./App.styles.js";

const App = ({
  currentAdmin,
  setProducts,
  setCategories,
  setBrands,
  productsPageNumber,
  setProductsTotalPages,
  categoriesPageNumber,
  setCategoriesTotalPages,
  brandsPageNumber,
  setBrandsTotalPages,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const getProducts = async () => {
    try {
      await axios.get(`/product?page=${productsPageNumber}`).then((res) => {
        const { products, totalPages } = res.data;
        setProductsTotalPages(totalPages);
        setProducts(products);
      });
    } catch (e) {
      console.log("error: ", e);
    }
  };

  React.useEffect(() => {
    // if (currentAdmin === null) {
    getProducts();
    // }
  }, [productsPageNumber]);

  const getCategories = async () => {
    try {
      await axios.get(`/category?page=${categoriesPageNumber}`).then((res) => {
        const { categories, totalPages } = res.data;
        setCategoriesTotalPages(totalPages);
        setCategories(categories);
      });
    } catch (e) {
      console.log("error: ", e);
    }
  };

  React.useEffect(() => {
    // if (currentAdmin === null) {
    getCategories();
    // }
  }, [categoriesPageNumber]);

  const getBrands = async () => {
    try {
      await axios.get(`/brand?page=${brandsPageNumber}`).then((res) => {
        const { brands, totalPages } = res.data;
        console.log(brands, totalPages);
        setBrandsTotalPages(totalPages);
        setBrands(brands);
      });
    } catch (e) {
      console.log("error: ", e);
    }
  };

  React.useEffect(() => {
    // if (currentAdmin === null) {
    getBrands();
    // }
  }, [brandsPageNumber]);

  // if (currentAdmin === null) {
  //   return <SignInSignUp />;
  // }

  return (
    <Container>
      <GlobalStyle />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <SubContainer>
        <Header toggle={toggle} />
        <Routes>
          <Route
            path="/*"
            element={
              <AuthRoute>
                <ProductRoot />
              </AuthRoute>
            }
          />
          <Route
            path="/category/*"
            element={
              <AuthRoute>
                <CategorytRoot />
              </AuthRoute>
            }
          />
          <Route
            path="/brand/*"
            element={
              <AuthRoute>
                <BrandRoot />
              </AuthRoute>
            }
          />
        </Routes>
      </SubContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  currentAdmin: state.admin.currentAdmin,
  productsPageNumber: state.product.pageNumber,
  categoriesPageNumber: state.category.pageNumber,
  brandsPageNumber: state.brand.pageNumber,
});

const mapDispatchToProps = (dispatch) => ({
  setProducts: (products) => dispatch(setProducts(products)),
  setCategories: (categories) => dispatch(setCategories(categories)),
  setBrands: (brands) => dispatch(setBrands(brands)),
  setProductsTotalPages: (productsTotalPages) =>
    dispatch(setProductsTotalPages(productsTotalPages)),
  setCategoriesTotalPages: (categoriesTotalPages) =>
    dispatch(setCategoriesTotalPages(categoriesTotalPages)),
  setBrandsTotalPages: (brandsTotalPages) =>
    dispatch(setBrandsTotalPages(brandsTotalPages)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
