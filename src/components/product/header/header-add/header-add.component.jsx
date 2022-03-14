import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../custom-button/custom-button.component";

import "./header-add.styles.scss";

const HeaderAdd = ({ handleSubmit }) => {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <div className="title">Product Add</div>
      <div className="buttons-container">
        <CustomButton id="add-product-btn" onClick={handleSubmit}>
          Save
        </CustomButton>
        <CustomButton id="delete-product-btn" onClick={() => navigate("/")}>
          Cancel
        </CustomButton>
      </div>
    </div>
  );
};

export default HeaderAdd;
