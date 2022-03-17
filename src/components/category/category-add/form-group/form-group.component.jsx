import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import FormInput from "../../../form-input/form-input.component";
import axios from "../../../../api/api";
import {
  addCategory,
  updateCategory,
} from "../../../../redux/categories/category.actions";

import { Container, FormContainer } from "./form-group.styles";

const CategoryFormGroup = ({ state, addCategory, updateCategory }) => {
  const { _id, name, description } = state ?? "";
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      if (!!state) {
        values._id = _id;
        
        await axios.put("/category/update", values);
        updateCategory(values);
        return navigate(-1);
      }

      await axios.post("/category/store", values);
      addCategory(values);

      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Formik
        initialValues={{ name: name, description: description }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.description) {
            errors.description = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <FormContainer onSubmit={handleSubmit}>
            <FormInput
              type="name"
              name="name"
              handleChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={errors.name}
              errorMessage={errors.name}
              label="Nome"
            />
            <FormInput
              type="description"
              name="description"
              handleChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              error={errors.description}
              errorMessage={errors.description}
              label="Descrição"
            />

            <button
              id="button-submit"
              type="submit"
              disabled={isSubmitting}
              style={{ display: "none" }}
            ></button>
          </FormContainer>
        )}
      </Formik>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCategory: (category) => dispatch(addCategory(category)),
  updateCategory: (category) => dispatch(updateCategory(category)),
});

export default connect(null, mapDispatchToProps)(CategoryFormGroup);
