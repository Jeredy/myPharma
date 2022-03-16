import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

import FormInput from "../../../form-input/form-input.component";
import axios from "../../../../api/api";

import { Container, FormContainer } from "./form-group.styles";

const Basic = ({ state }) => {
  const { _id, name } = state ?? "";

  const navigate = useNavigate();

  const onSubmit = (values) => {
    try {
      if (!!state) {
        values._id = _id;
        return axios.put("/brand/update", values);
      }

      axios.post("/brand/store", values);
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

export default Basic;
