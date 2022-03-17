import React from "react";
import { Routes, Route } from "react-router-dom";

import CategoryPreview from "../category/category-preview/category-preview.component";
import CategoryAddPage from "./category-add/category-add.component";

const CategoryRoot = () => {
  return (
    <Routes>
      <Route exact path="/" element={<CategoryPreview />} />
      <Route exact path="/add-category" element={<CategoryAddPage />} />
    </Routes>
  );
};

export default CategoryRoot;
