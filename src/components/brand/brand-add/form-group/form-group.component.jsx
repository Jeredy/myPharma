import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import FormInput from "../../../form-input/form-input.component";
import axios from "../../../../api/api";
import { addBrand, updateBrand } from "../../../../redux/brands/brand.actions";

import { Container, FormContainer } from "./form-group.styles";

const BrandFormGroup = ({ state, addBrand, updateBrand }) => {
  const { _id, name } = state ?? "";

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      if (!!state) {
        values._id = _id;

        await axios.put("/brand/update", values);
        updateBrand(values);
        return navigate("/brand");
      }

      const { data } = await axios.post("/brand/store", values);
      addBrand(data.response);

      navigate("/brand");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Formik
        initialValues={{ name: name }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          } else if (values.name.length > 30) {
            errors.name = "Max length 30 characters";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setSubmitting(false);
          navigate(-1);
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
  addBrand: (brand) => dispatch(addBrand(brand)),
  updateBrand: (brand) => dispatch(updateBrand(brand)),
});

export default connect(null, mapDispatchToProps)(BrandFormGroup);
