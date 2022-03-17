import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import { setProducts } from "../../redux/products/product.actions";
import ProductPreview from "../product/product-preview/product-preview.component";
import ProductAddPage from "../product/product-add/product-add.component";
import axios from "../../api/api";

const ProductRoot = ({ setProducts }) => {
  const getProducts = async () => {
    try {
      await axios.get("/product").then((res) => {
        const data = res.data;
        setProducts(data);
      });
    } catch (e) {
      console.log("error: ", e);
    }
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<ProductPreview />} />
      <Route exact path="/add-product" element={<ProductAddPage />} />
    </Routes>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setProducts: (products) => dispatch(setProducts(products)),
});

export default connect(null, mapDispatchToProps)(ProductRoot);
