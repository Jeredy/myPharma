import React from "react";
import { Routes, Route } from "react-router-dom";

import BrandPreview from "../brand/brand-preview/brand-preview.component";
import BrandAddPage from "./brand-add/brand-add.component";

const BrandRoot = () => {
  return (
    <Routes>
      <Route exact path="/" element={<BrandPreview />} />
      <Route exact path="/add-brand" element={<BrandAddPage />} />
    </Routes>
  );
};

export default BrandRoot;
