import React from "react";
import { Routes, Route } from "react-router-dom";

import ProductPreview from "../product/product-preview/product-preview.component";
import ProductAddPage from "../product/product-add/product-add.component";

const ProductRoot = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ProductPreview />} />
      <Route exact path="/add-product" element={<ProductAddPage />} />
    </Routes>
  );
};

export default ProductRoot;
