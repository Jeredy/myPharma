import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import { setBrands } from "../../redux/brands/brand.actions";
import BrandPreview from "../brand/brand-preview/brand-preview.component";
import BrandAddPage from "./brand-add/brand-add.component";
import axios from "../../api/api";

const BrandRoot = ({ setBrands }) => {
  const getBrands = async () => {
    try {
      await axios.get("/brand").then((res) => {
        const data = res.data;
        setBrands(data);
      });
    } catch (e) {
      console.log("error: ", e);
    }
  };

  React.useEffect(() => {
    getBrands();
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<BrandPreview />} />
      <Route exact path="/add-brand" element={<BrandAddPage />} />
    </Routes>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setBrands: (brands) => dispatch(setBrands(brands)),
});

export default connect(null, mapDispatchToProps)(BrandRoot);
