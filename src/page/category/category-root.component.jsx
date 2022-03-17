import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import { setCategories } from "../../redux/categories/category.actions";
import CategoryPreview from "../category/category-preview/category-preview.component";
import CategoryAddPage from "./category-add/category-add.component";
import axios from "../../api/api";

const CategoryRoot = ({ setCategories }) => {
  const getCategories = async () => {
    try {
      await axios.get("/category").then((res) => {
        const data = res.data;
        setCategories(data);
      });
    } catch (e) {
      console.log("error: ", e);
    }
  };

  React.useEffect(() => {
    getCategories();
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<CategoryPreview />} />
      <Route exact path="/add-category" element={<CategoryAddPage />} />
    </Routes>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCategories: (categories) => dispatch(setCategories(categories)),
});

export default connect(null, mapDispatchToProps)(CategoryRoot);
